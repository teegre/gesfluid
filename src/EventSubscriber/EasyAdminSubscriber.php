<?php

namespace App\EventSubscriber;

use App\Entity\User;
use App\Repository\GroupRepository;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class EasyAdminSubscriber implements EventSubscriberInterface
{
  private $userPasswordHasher;

  public function __construct(UserPasswordHasherInterface $userPasswordHasher)
  {
    $this->userPasswordHasher = $userPasswordHasher;
  }

  public static function getSubscribedEvents()
  {
    return [
      BeforeEntityPersistedEvent::class => ['generateUser'],
    ];
  }

  // Hash password, set user roles and user id based on the selected user group...
  public function generateUser(BeforeEntityPersistedEvent $event) 
  {
    $entity = $event->getEntityInstance();

    if (!($entity instanceof User)) {
      return;
    }

    $plainPassword = $entity->getPassword();
    $entity
      ->setPassword(
        $this->userPasswordHasher
             ->hashPassword($entity, $plainPassword)
      );

    $userGroup = $entity->getUserGroup();

    if ($userGroup->getName() == 'ADMIN') {
      $entity->setRoles(['ROLE_ADMIN', 'ROLE_USER']);
    } else {
      $entity->setRoles(['ROLE_USER']);
    }
  }
}
?>
