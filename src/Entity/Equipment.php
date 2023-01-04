<?php

namespace App\Entity;

use App\Repository\EquipmentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EquipmentRepository::class)]
class Equipment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?float $weight = null;

    #[ORM\Column]
    private ?float $co2EqTonnage = null;

    #[ORM\ManyToOne(inversedBy: 'equipment')]
    private ?Fluid $fluid = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getWeight(): ?float
    {
        return $this->weight;
    }

    public function setWeight(float $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getCo2EqTonnage(): ?float
    {
        return $this->co2EqTonnage;
    }

    public function setCo2EqTonnage(float $co2EqTonnage): self
    {
        $this->co2EqTonnage = $co2EqTonnage;

        return $this;
    }

    public function getFluid(): ?Fluid
    {
        return $this->fluid;
    }

    public function setFluid(?Fluid $fluid): self
    {
        $this->fluid = $fluid;

        return $this;
    }
}
