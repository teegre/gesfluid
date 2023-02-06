<?php

namespace App\Controller\Admin;

use App\Entity\Intervention;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;

class InterventionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Intervention::class;
    }

    public function configureFields(string $pageName): iterable
    {
      return [
        'date',
        AssociationField::new('equipment')->renderAsNativeWidget(),
        AssociationField::new('user')->renderAsNativeWidget(),
        UrlField::new('pdfPath'),
      ];
    }
}
