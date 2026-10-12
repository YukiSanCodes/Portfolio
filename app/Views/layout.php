<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Julian's portfolio — a BSITWMA student from FEU Tech.">
    <title><?= esc($title ?? 'Julian — IT Portfolio') ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= base_url('assets/custom.css') ?>">
</head>
<body>
    <div class="noise" aria-hidden="true"></div>
    <?= $this->renderSection('content') ?>
    <script src="<?= base_url('assets/js/app.js') ?>"></script>
</body>
</html>
