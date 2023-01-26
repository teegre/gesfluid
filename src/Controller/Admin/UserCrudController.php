<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
      return [
        'firstname',
        'lastname',
        AssociationField::new('userGroup')->renderAsNativeWidget(),
        TextField::new('userId')->setFormTypeOption('disabled', 'disabled'),
        TextField::new('password')->setFormType(PasswordType::class)
      ];
    }
}
