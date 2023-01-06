<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContainerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContainerRepository::class)]
#[ApiResource(
  itemOperations: ['get' => ['normalization_context' => ['groups' => 'container:item']]],
  collectionOperations: ['get' => ['normalization_context' => ['groups' => 'container:collection']]]
 )]
class Container
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['container:item'])]
    private ?int $id = null;

    /* Numéro de série du contenant */
    #[ORM\Column(length: 255)]
    #[Groups(['container:item'])]
    private ?string $serialNumber = null;

    /* Capacité du contenant */
    #[ORM\Column]
    #[Groups(['container:item'])]
    private ?float $capacity = null;

    /* Interventions impliquant ce contenant */
    #[ORM\OneToMany(mappedBy: 'container', targetEntity: Intervention::class)]
    #[Groups(['container:item', 'container:collection'])]
    private Collection $interventions;

    /* Fluide contenu */
    #[ORM\ManyToOne(inversedBy: 'containers')]
    #[Groups(['container:item'])]
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

    public function getCapacity(): ?float
    {
        return $this->capacity;
    }

    public function setCapacity(?float $capacity): self
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
