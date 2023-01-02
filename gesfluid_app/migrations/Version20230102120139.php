<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230102120139 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE container (id INT AUTO_INCREMENT NOT NULL, fluid_id INT DEFAULT NULL, serial_number VARCHAR(255) NOT NULL, INDEX IDX_C7A2EC1BDD39A5FC (fluid_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE detector (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, control_date DATE NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE equipment (id INT AUTO_INCREMENT NOT NULL, fluid_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, weight DOUBLE PRECISION NOT NULL, co2_eq_tonnage DOUBLE PRECISION NOT NULL, INDEX IDX_D338D583DD39A5FC (fluid_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fluid (id INT AUTO_INCREMENT NOT NULL, fluid_type_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_D7AE25FFB14D1AC (fluid_type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fluid_type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE intervention (id INT AUTO_INCREMENT NOT NULL, intervention_type_id INT DEFAULT NULL, equipment_id INT DEFAULT NULL, container_id INT DEFAULT NULL, detector_id INT DEFAULT NULL, date DATE NOT NULL, control_frequency_hcfc_hfc INT NOT NULL, control_frequency_hfc INT NOT NULL, virgin_fluid_quantity DOUBLE PRECISION DEFAULT NULL, recycled_fluid_quantity DOUBLE PRECISION DEFAULT NULL, regenerated_fluid_quantity DOUBLE PRECISION DEFAULT NULL, for_procession_fluid_quantity DOUBLE PRECISION DEFAULT NULL, bsff_number VARCHAR(255) DEFAULT NULL, reusable_fluid_quantity DOUBLE PRECISION DEFAULT NULL, collected_fluid_destination VARCHAR(255) DEFAULT NULL, remarks VARCHAR(255) DEFAULT NULL, INDEX IDX_D11814AB8EA2F8F6 (intervention_type_id), INDEX IDX_D11814AB517FE9FE (equipment_id), INDEX IDX_D11814ABBC21F742 (container_id), INDEX IDX_D11814ABE0B92A62 (detector_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE intervention_type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE leakage (id INT AUTO_INCREMENT NOT NULL, intervention_id INT DEFAULT NULL, location VARCHAR(255) NOT NULL, INDEX IDX_9F4780598EAE3863 (intervention_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, last_name VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE container ADD CONSTRAINT FK_C7A2EC1BDD39A5FC FOREIGN KEY (fluid_id) REFERENCES fluid (id)');
        $this->addSql('ALTER TABLE equipment ADD CONSTRAINT FK_D338D583DD39A5FC FOREIGN KEY (fluid_id) REFERENCES fluid (id)');
        $this->addSql('ALTER TABLE fluid ADD CONSTRAINT FK_D7AE25FFB14D1AC FOREIGN KEY (fluid_type_id) REFERENCES fluid_type (id)');
        $this->addSql('ALTER TABLE intervention ADD CONSTRAINT FK_D11814AB8EA2F8F6 FOREIGN KEY (intervention_type_id) REFERENCES intervention_type (id)');
        $this->addSql('ALTER TABLE intervention ADD CONSTRAINT FK_D11814AB517FE9FE FOREIGN KEY (equipment_id) REFERENCES equipment (id)');
        $this->addSql('ALTER TABLE intervention ADD CONSTRAINT FK_D11814ABBC21F742 FOREIGN KEY (container_id) REFERENCES container (id)');
        $this->addSql('ALTER TABLE intervention ADD CONSTRAINT FK_D11814ABE0B92A62 FOREIGN KEY (detector_id) REFERENCES detector (id)');
        $this->addSql('ALTER TABLE leakage ADD CONSTRAINT FK_9F4780598EAE3863 FOREIGN KEY (intervention_id) REFERENCES intervention (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE container DROP FOREIGN KEY FK_C7A2EC1BDD39A5FC');
        $this->addSql('ALTER TABLE equipment DROP FOREIGN KEY FK_D338D583DD39A5FC');
        $this->addSql('ALTER TABLE fluid DROP FOREIGN KEY FK_D7AE25FFB14D1AC');
        $this->addSql('ALTER TABLE intervention DROP FOREIGN KEY FK_D11814AB8EA2F8F6');
        $this->addSql('ALTER TABLE intervention DROP FOREIGN KEY FK_D11814AB517FE9FE');
        $this->addSql('ALTER TABLE intervention DROP FOREIGN KEY FK_D11814ABBC21F742');
        $this->addSql('ALTER TABLE intervention DROP FOREIGN KEY FK_D11814ABE0B92A62');
        $this->addSql('ALTER TABLE leakage DROP FOREIGN KEY FK_9F4780598EAE3863');
        $this->addSql('DROP TABLE container');
        $this->addSql('DROP TABLE detector');
        $this->addSql('DROP TABLE equipment');
        $this->addSql('DROP TABLE fluid');
        $this->addSql('DROP TABLE fluid_type');
        $this->addSql('DROP TABLE intervention');
        $this->addSql('DROP TABLE intervention_type');
        $this->addSql('DROP TABLE leakage');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
