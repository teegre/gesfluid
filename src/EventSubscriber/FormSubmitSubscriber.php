<?php
namespace App\EventSubscriber;

use App\Entity\Intervention;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

use mikehaertl\pdftk\Pdf;

class FormSubmitSubscriber implements EventSubscriberInterface
{
  public static function getSubscribedEvents()
  {
    return [
      KernelEvents::VIEW => ['handleSubmit', EventPriorities::POST_WRITE],
    ];
  } 

  public function handleSubmit(ViewEvent $event): void
  {
    $intervention = $event->getControllerResult();
    $method = $event->getRequest()->getMethod();

    if (!$intervention instanceof Intervention || Request::METHOD_POST !== $method) {
      return;
    }

    $user = $intervention->getUser();
    $userId = $user->getUserId();
    $date = $intervention->getDate()->format('Ymd');
    $filename = $date . '_' . $userId . '-' . $intervention->getId() . '.pdf';
    $userFirstName = $user->getFirstName();
    $userLastName = $user->getLastName();
    
    $pdf = new Pdf();
    $pdf->addFile('template.pdf');
    $result = $pdf->fillForm([
      'Operateur' => $userFirstName . ' ' . $userLastName,
    ])
      ->needAppearances()
      ->saveAs('interventions/' . $filename);
    
    if ($result === false) {
      $error = $pdf->getError();
    }
  }
}

?>
