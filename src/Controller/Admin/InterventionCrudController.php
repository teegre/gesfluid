<?php

namespace App\Controller\Admin;

use App\Entity\Intervention;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class InterventionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Intervention::class;
    }
}
