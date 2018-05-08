<!DOCTYPE html>
<html lang=en>

<?php $courseMap = array("58" => "http://rpw.adobeconnect.com/pwrplan-pwc07282016"); ?>

<head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <title>Rally Point Webinars</title>
    <meta name=description content="Webinar Production for when your important people are watching.">
    <meta property=og:url content="http://powerplan-pwc.rallypointwebinars.technology/local/rallypoint/webinar.php?id=<?php echo htmlspecialchars($_GET['id']) ?>">
    <meta property=og:site_name content="Rally Point Webinars">
    <meta property=og:locale content=en_US>
    <meta property=og:type content=website>
    <meta property=og:title content="Rally Point Webinars">
    <meta property=og:description content="Webinar Production for when your important people are watching.">
    <meta property=og:image content="">
    <meta name=twitter:card content=summary>
    <meta name=twitter:title content="Rally Point Webinars">
    <meta name=twitter:description content="Webinar Production for when your important people are watching.">
    <meta name=twitter:image content="">
    <meta name=twitter:image:alt content="">
    <meta name=twitter:site content="http://powerplan-pwc.rallypointwebinars.technology/local/rallypoint/webinar.php?id=<?php echo htmlspecialchars($_GET['id']) ?>">
    <link rel=canonical href="http://powerplan-pwc.rallypointwebinars.technology/local/rallypoint/webinar.php?id=<?php echo htmlspecialchars($_GET['id']) ?>">
    <!-- favicons -->
    <link rel=apple-touch-icon sizes=57x57 href=images/logos/apple-icon-57x57.png>
    <link rel=apple-touch-icon sizes=60x60 href=images/logos/apple-icon-60x60.png>
    <link rel=apple-touch-icon sizes=72x72 href=images/logos/apple-icon-72x72.png>
    <link rel=apple-touch-icon sizes=76x76 href=images/logos/apple-icon-76x76.png>
    <link rel=apple-touch-icon sizes=114x114 href=images/logos/apple-icon-114x114.png>
    <link rel=apple-touch-icon sizes=120x120 href=images/logos/apple-icon-120x120.png>
    <link rel=apple-touch-icon sizes=144x144 href=images/logos/apple-icon-144x144.png>
    <link rel=apple-touch-icon sizes=152x152 href=images/logos/apple-icon-152x152.png>
    <link rel=apple-touch-icon sizes=180x180 href=images/logos/apple-icon-180x180.png>
    <link rel=icon type=image/png sizes=192x192 href=images/logos/android-icon-192x192.png>
    <link rel=icon type=image/png sizes=32x32 href=images/logos/favicon-32x32.png>
    <link rel=icon type=image/png sizes=96x96 href=images/logos/favicon-96x96.png>
    <link rel=icon type=image/png sizes=16x16 href=images/logos/favicon-16x16.png>
    <link rel=manifest href=manifest.json>
    <meta name=msapplication-TileColor content=#ffffff>
    <meta name=msapplication-TileImage content=images/logos/ms-icon-144x144.png>
    <meta name=theme-color content=#ffffff>
    <!-- End favicons -->
    <style>
        body {
            margin: 0
        }

        #redirects-iframe {
            width: 100vw;
            height: 100vh
        }
    </style>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBQWKBV" height=0 width=0 style=display:none;visibility:hidden></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <iframe id="redirects-iframe" src="<?php echo $courseMap[htmlspecialchars($_GET["id"])] ?>" frameborder=0 width=100% height=100%></iframe>
</body>

</html>
