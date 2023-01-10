<?php

namespace App\Controller\Admin;

use App\Entity\Fluid;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class FluidCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Fluid::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
