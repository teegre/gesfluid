<?php

namespace App\Entity;

use App\Repository\ContainerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContainerRepository::class)]
class Container
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $serialNumber = null;

    #[ORM\Column]
    private ?float $capacity = null;

    #[ORM\OneToMany(mappedBy: 'container', targetEntity: Intervention::class)]
    private Collection $interventions;

    #[ORM\ManyToOne(inversedBy: 'containers')]
    private ?Fluid $fluid = null;

    public function __construct()
    {
        $this->interventions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSerialNumber(): ?string
    {
        return $this->serialNumber;
    }

    public function setSerialNumber(string $serialNumber): self
    {
        $this->serialNumber = $serialNumber;

        return $this;
    }

    public function getCapacity(): ?Fluid
    {
        return $this->capacity;
    }

    public function setCapacity(?Fluid $capacity): self
    {
        $this->capacity = $capacity;

        return $this;
    }

    /**
     * @return Collection<int, Intervention>
     */
    public function getInterventions(): Collection
    {
        return $this->interventions;
    }

    public function addIntervention(Intervention $intervention): self
    {
        if (!$this->interventions->contains($intervention)) {
            $this->interventions->add($intervention);
            $intervention->setContainer($this);
        }

        return $this;
    }

    public function removeIntervention(Intervention $intervention): self
    {
        if ($this->interventions->removeElement($intervention)) {
            // set the owning side to null (unless already changed)
            if ($intervention->getContainer() === $this) {
                $intervention->setContainer(null);
            }
        }

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
