<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DetectorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DetectorRepository::class)]
#[ApiResource(
  normalizationContext: ['groups' => 'read:detector']
 )]
class Detector
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('read:detector')]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('read:detector')]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups('read:detector')]
    private ?\DateTimeInterface $controlDate = null;

    #[ORM\OneToMany(mappedBy: 'detector', targetEntity: Intervention::class)]
    #[Groups('read:detector')]
    private Collection $interventions;

    public function __construct()
    {
        $this->interventions = new ArrayCollection();
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

    public function getControlDate(): ?\DateTimeInterface
    {
        return $this->controlDate;
    }

    public function setControlDate(\DateTimeInterface $controlDate): self
    {
        $this->controlDate = $controlDate;

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
            $intervention->setDetector($this);
        }

        return $this;
    }

    public function removeIntervention(Intervention $intervention): self
    {
        if ($this->interventions->removeElement($intervention)) {
            // set the owning side to null (unless already changed)
            if ($intervention->getDetector() === $this) {
                $intervention->setDetector(null);
            }
        }

        return $this;
    }
}
