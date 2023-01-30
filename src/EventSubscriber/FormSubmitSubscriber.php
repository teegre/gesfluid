<?php
namespace App\EventSubscriber;

use App\Entity\Intervention;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Kernel;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

use mikehaertl\pdftk\Pdf;
use Symfony\Component\HttpKernel\Event\KernelEvent;

class FormSubmitSubscriber implements EventSubscriberInterface
{

  private $fields = [
    1                           => 'Case_Assemblage',
    2                           => 'Case_MiseService',
    3                           => 'Case_Modif',
    4                           => 'Case_Maintenance',
    5                           => 'Case_CtrlPerio',
    6                           => 'Case_CtrlNonPerio',
    7                           => 'Case_Demantel',
    8                           => 'Case_Autre',
    'leak_yes'                  => 'Case_Fuite_Oui',
    'leak_no'                   => 'Case_Fuite_Non',
    'leak_location_1'           => 'Fuite_Loca_1',
    'leak_location_2'           => 'Fuite_Loca_2',
    'leak_location_3'           => 'Fuite_Loca_3',
    'leak_fixed_1'              => 'Case_Rep_Fuite1_realisee',
    'leak_fixed_2'              => 'Case_Rep_Fuite2_realisee',
    'leak_fixed_3'              => 'Case_Rep_Fuite3_realisee',
    'leak_todo_1'               => 'Case_Rep_Fuite1_AFaire',
    'leak_todo_2'               => 'Case_Rep_Fuite2_AFaire',
    'leak_todo_3'               => 'Case_Rep_Fuite3_AFaire',
  ];

  /* private $leaks = []; */

  public static function getSubscribedEvents()
  {
    return [
      KernelEvents::VIEW => ['handleSubmit', EventPriorities::POST_WRITE],
      /* KernelEvents::RESPONSE => ['handleLeakage', EventPriorities::PRE_WRITE], */
    ];
  } 

  public function handleSubmit(ViewEvent $event): void
  {
    $intervention = $event->getControllerResult();
    $method = $event->getRequest()->getMethod();

    if (!$intervention instanceof Intervention || Request::METHOD_POST !== $method) {
      return;
    }

    // Intervention date
    $pdfDate = $intervention->getDate()->format('Ymd');
    $date = $intervention->getDate()->format('d/m/Y');

    // User
    $user = $intervention->getUser();
    $userId = $user->getUserId();
    $userName = $user->getFirstName() . ' ' . $user->getLastName();

    // PDF filename
    $filename = $pdfDate . '_' . $userId . '-' . $intervention->getId() . '.pdf';

    // Equipment
    $equipment = $intervention->getEquipment();

    // Intervention type
    $type = $intervention->getInterventionType();

    // Leak detector and leak detection system
    $detector = $intervention->getDetector();
    if ($detector) {
      $detectorName = $detector->getName();
      $detectorCtrlD = $detector->getControlDate()->format('d');
      $detectorCtrlM = $detector->getControlDate()->format('m');
      $detectorCtrlY = $detector->getControlDate()->format('Y');
    } else {
      $detectorName = '';
      $detectorCtrlD = '';
      $detectorCtrlM = '';
      $detectorCtrlY = '';
    }

    $leakDetectionSystem = $equipment->getLeakDetectionSystem();

    // Control frequency
    if ($type->getId() == 5 || $type->getId() == 6) {
      $frequency = $equipment->getControlFrequency();
      if ($leakDetectionSystem) {
        switch ($frequency) {
          case 24:
            $controlFrequency = 'Case_Avec_24m';
            break;
          case 12:
            $controlFrequency = 'Case_Avec_12m';
            break;
          case 6:
            $controlFrequency = 'Case_Avec_6m';
            break;
        }
      } else {
        switch ($frequency) {
          case 12:
            $controlFrequency = 'Case_Sans_12m';
            break;
          case 6:
            $controlFrequency = 'Case_Sans_6m';
            break;
          case 3:
            $controlFrequency = 'Case_Sans_3m';
            break;
        }
      }
    } else {
      $controlFrequency = '';
    }

    // Fluid quantities
    $A = $intervention->getVirginFluidQuantity();
    $B = $intervention->getRecycledFluidQuantity();
    $C = $intervention->getRegeneratedFluidQuantity();

    $ABC = $A + $B + $C;

    $D = $intervention->getForProcessingFluidQuantity();
    $E = $intervention->getForProcessingFluidQuantity();

    $BSFF = $intervention->getBsffNumber();

    $DE = $D + $E;

    // Container
    $container = $intervention->getContainer();
    $containerSerialNumber = ($container) ? ($container->getSerialNumber()) : '';

    // Type de déchets
    $fluid = $equipment->getFluid();
    $waste = ($D) ? ($fluid->getFluidType()->getId()) : '';

    switch ($waste) {
      case 1:
        $adrRid = 'Case_12_UN1078';
        break;
      case 2:
        $adrRid = 'Case_12_Autre140601';
        break;
      case 3:
        $adrRid = 'Case_12_UN3161';
        break;
      case 4:
        $adrRid = 'Case_12_Autre160504';
        break;
      default:
        $adrRid = '';
        break;
    }
    
    $pdf = new Pdf();
    $pdf->addFile('template.pdf');
    $result = $pdf->fillForm([
      'Operateur' => $userName,
      // 'Detenteur' => ''
      // Equipement
      'Equipement_ID' => $equipment->getName(),
      'Equipement_Fluide' => $equipment->getFluid()->getName(),
      'Equipement_Charge' => $equipment->getWeight(),
      'Equipement_teqCO2' => $equipment->getCo2EqTonnage(),

      // Nature de l'intervention
      $this->fields[$type->getId()] => 'Yes',
      'Autre' => $intervention->getOtherInterventionType(),

      // Détecteur et système permanent de détection de fuites
      'Detecteur_ID'   => $detectorName,
      'Controle_Jour'  => $detectorCtrlD,
      'Controle_Mois'  => $detectorCtrlM,
      'Controle_Annee' => $detectorCtrlY,

      'Bouton_Oui' => $leakDetectionSystem,

      // Fréquence minimale du contrôle périodique
      'Case_HCFC_2' => 'Yes',
      $controlFrequency => 'Yes',

      // Quantités de fluide
      '11_Quantite' => ($ABC > 0) ? ($ABC) : '',
      '11_QA' => ($ABC > 0) ? ($A) : '',
      '11_QB' => ($ABC > 0) ? ($B) : '',
      '11_QC' => ($ABC > 0) ? ($C) : '',

      '11_QDE' => ($DE > 0) ? ($DE) : '',
      '11_QD' => ($DE > 0) ? ($D) : '',
      '11_BSFF' => $BSFF,
      '11_QE' => ($DE > 0) ? ($E) : '',

      // Contenant
      '11_Contenant_ID' => $containerSerialNumber,

      // Déchets
      $adrRid => 'Yes',

      // Installation prévue de destination du fluide récupéré
      '13_Instal' => $intervention->getCollectedFluidDestination(),

      // Observations
      '14_Observations' => $intervention->getRemarks(),

      // Date et signatures
      'Sign_Operateur_Nom' => $userName,
      'Sign_Operateur_Qualite' => 'Stagiaire',
      'Sign_Operateur_Date' => $date,
      'Sign_Detenteur_Date' => $date,

    ])
      ->needAppearances()
      ->saveAs('interventions/' . $filename);
    
    if ($result === false) {
      $error = $pdf->getError();
    }
  }
}

?>
