<?php

namespace App\DataFixtures;

use App\Entity\Container;
use App\Entity\Detector;
use App\Entity\Equipment;
use App\Entity\FluidType;
use App\Entity\Fluid;
use App\Entity\Group;
use App\Entity\InterventionType;
use App\Entity\User;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

class AppFixtures extends Fixture
{
  private $fluidTypes; // tableau: stocke les types nouvellement créés.
  private $fluids;     // tableau: stocke les fluides nouvellement créés.
  private $userGroups; // tableau: stocke les groupes d'utilisateurs nouvellement créés.

  public function load(ObjectManager $manager): void
  {
    $this->addFluidTypes($manager);
    $this->addFluids($manager);
    $this->addContainers($manager);
    $this->addEquipments($manager);
    $this->addDetectors($manager);
    $this->addInterventionsType($manager);
    $this->addGroups($manager);
    $this->addUsers($manager);
    $manager->flush();
  }

  private function random_float($min, $max): float
  {
    // Retourne un float aléatoire compris entre $min et $max.
    return ($min + lcg_value() * (abs($max - $min)));
  }

  private function random_date(): DateTime
  {
    // Renvoie une date aléatoire comprise entre le 1er janvier 2022 et aujourd'hui
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
      // On choisit un type aléatoirement dans le tableau $fluidTypes
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
      // On choisit un fluide aléatoirement dans le tableau $fluids
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
      // On choisit un fluide aléatoirement dans le tableau $fluids
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
      /* "Autre", */
    ];
    foreach ($types as $type) {
      $interventionType = new InterventionType();
      $interventionType->setName($type);
      $manager->persist($interventionType);
    }
  }

  private function addGroups(ObjectManager $manager): void
  {
    $userGroup = new Group();
    $userGroup->setName('ADMIN');
    $manager->persist($userGroup);
    $this->userGroups[] = $userGroup;

    $userGroup = new Group();
    $userGroup->setName('CDA22075');
    $manager->persist($userGroup);
    $this->userGroups[] = $userGroup;
  }

  private function addUsers(ObjectManager $manager): void
  {
    $passwordHasherFactory = new PasswordHasherFactory([
      User::class => ['algorithm' => 'auto'],
      PasswordAuthenticatedUserInterface::class => [
        'algorithm' => 'auto',
        'cost' => 15,
      ],
    ]);

    $passwordHasher = new UserPasswordHasher($passwordHasherFactory);
    $plainPassword = 'password';

    $user = new User();
    $user->setFirstName('Ad');
    $user->setLastName('Ministrator');
    $user->setUserGroup($this->userGroups[0]);
    $user->setUserId($this->userGroups[0]->getName() . '1');
    $hashedPassword = $passwordHasher->hashPassword($user, $plainPassword);
    $user->setPassword($hashedPassword);
    $user->setRoles(['ROLE_ADMIN', 'ROLE_USER']);
    $manager->persist($user);

    $user = new User();
    $user->setFirstName('Us');
    $user->setLastName('Er');
    $user->setUserGroup($this->userGroups[1]);
    $user->setUserId($this->userGroups[1]->getName() . '1');
    $hashedPassword = $passwordHasher->hashPassword($user, $plainPassword);
    $user->setPassword($hashedPassword);
    $user->setRoles(['ROLE_USER']);
    $manager->persist($user);
  }
}
