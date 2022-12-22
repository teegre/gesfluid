<?php
require_once '../vendor/autoload.php';
use mikehaertl\pdftk\Pdf;
$pdf = new Pdf();
$pdf->addFile('cerfa_15497-03_Saisie_numérique.pdf');
$result = $pdf->fillForm([
  'Operateur' => 'Stéphane MEYER'
])
  ->needAppearances()
  ->saveAs('test.pdf');

if ($result === false) {
  $error = $pdf->getError();
}

?>
