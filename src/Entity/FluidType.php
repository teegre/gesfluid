<?php

namespace App\Entity;

use App\Repository\FluidTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FluidTypeRepository::class)]
class FluidType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'fluidType', targetEntity: Fluid::class)]
    private Collection $fluids;

    public function __construct()
    {
        $this->fluids = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Fluid>
     */
    public function getFluids(): Collection
    {
        return $this->fluids;
    }

    public function addFluid(Fluid $fluid): self
    {
        if (!$this->fluids->contains($fluid)) {
            $this->fluids->add($fluid);
            $fluid->setFluidType($this);
        }

        return $this;
    }

    public function removeFluid(Fluid $fluid): self
    {
        if ($this->fluids->removeElement($fluid)) {
            // set the owning side to null (unless already changed)
            if ($fluid->getFluidType() === $this) {
                $fluid->setFluidType(null);
            }
        }

        return $this;
    }
}
