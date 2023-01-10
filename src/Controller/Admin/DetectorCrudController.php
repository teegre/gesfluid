<?php

namespace App\Controller\Admin;

use App\Entity\Detector;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class DetectorCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Detector::class;
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
