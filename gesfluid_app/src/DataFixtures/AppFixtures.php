<?php

namespace App\DataFixtures;

use App\Entity\Container;
use App\Entity\Detector;
use App\Entity\Equipment;
use App\Entity\FluidType;
use App\Entity\Fluid;
use App\Entity\InterventionType;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
  private $fluidTypes;
  private $fluids;

  public function load(ObjectManager $manager): void
  {
    $this->addFluidTypes($manager);
    $this->addFluids($manager);
    $this->addContainers($manager);
    $this->addEquipments($manager);
    $this->addDetectors($manager);
    $this->addInterventionsType($manager);
    $manager->flush();
  }

  private function random_float($min, $max): float
  {
    // Retourne un float aléatoire compris entre $min et $max.
    return ($min + lcg_value() * (abs($max - $min)));
  }

  private function random_date(): DateTime
  {
    $min = strtotime('2022-01-01');
    $max = getdate()[0];
    $dt = new DateTime();
    $dt->setTimestamp(mt_rand($min, $max));
    return $dt;
  }

  private function addFluidTypes(ObjectManager $manager): void
  {
    // Types de fluide
    $fluidType = new FluidType();
    $fluidType->setName('Non-inflammable UN 1078');
    $this->fluidTypes[] = $fluidType;
    $manager->persist($fluidType);
    $fluidType = new FluidType();
    $fluidType->setName('Non-inflammable autre');
    $this->fluidTypes[] = $fluidType;
    $manager->persist($fluidType);
    $fluidType = new FluidType();
    $fluidType->setName('Inflammable UN 3161');
    $this->fluidTypes[] = $fluidType;
    $manager->persist($fluidType);
    $fluidType = new FluidType();
    $fluidType->setName('Inflammable autre');
    $this->fluidTypes[] = $fluidType;
    $manager->persist($fluidType);
  }

  private function addFluids(ObjectManager $manager): void
  {
    // Fluides
    for ($i = 1; $i <= 10; $i++) {
      $fluid = new Fluid();
      $fluid->setName('Fluide ' . $i);
      $fluid->setFluidType($this->fluidTypes[rand(0, count($this->fluidTypes)-1)]);
      $this->fluids[] = $fluid;
      $manager->persist($fluid);
    }
  }

  private function addContainers(ObjectManager $manager): void
  {
    // Contenants
    for ($i = 1; $i <= 5; $i++) {
      $container = new Container;
      $container->setSerialNumber(uniqid());
      $container->setCapacity($this->random_float(1, 10));
      $container->setFluid($this->fluids[rand(0, count($this->fluids)-1)]);
      $manager->persist($container);
    }
  }

  private function addEquipments(ObjectManager $manager): void
  {
    // Equipements
    for ($i = 1; $i <= 3; $i++) {
      $equipment = new Equipment;
      $equipment->setName('Equipement ' . $i);
      $equipment->setWeight($this->random_float(50, 100));
      $equipment->setCo2EqTonnage($this->random_float(100, 1000));
      $equipment->setFluid($this->fluids[rand(0, count($this->fluids)-1)]);
      $manager->persist($equipment);
    }
  }

  private function addDetectors(ObjectManager $manager): void
  {
    // Détecteurs de fuites
    for ($i = 1; $i <= 2; $i++) {
      $detector = new Detector();
      $detector->setName('Détecteur ' . $i);
      $detector->setControlDate($this->random_date());
      $manager->persist($detector);
    }
  }

  private function addInterventionsType(ObjectManager $manager): void
  {
    $types = [
      "Assemblage",
      "Mise en service",
      "Modification",
      "Maintenance",
      "Contrôle d'étanchéité périodique",
      "Contrôle d'étanchéité non périodique",
      "Démantèlement",
      "Autre",
      // NOTE: Le type d'intervention "Autre" devant être précisé,
      // il serait judicieux de créer un nouveau type d'intervention
      // lorsque qu'il est seléctionné par l'utilisateur...
    ];
    foreach ($types as $type) {
      $interventionType = new InterventionType();
      $interventionType->setName($type);
      $manager->persist($interventionType);
    }
  }
}
