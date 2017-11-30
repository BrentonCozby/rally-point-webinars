<!DOCTYPE html>
<html lang=en>

<?php $courseMap = array("2767" => "artemis130", "391" => "pccpa312r", "2778" => "rpw-feb-12", "2784" => "dr-sinatra-520", "351" => "slmarch12r", "1512" => "artemis360-q4-2012r", "187" => "a9000exv4", "2823" => "accept-nov-13", "1411" => "aa-q4-2012r", "1672" => "accept-jan-2013r", "2797" => "accept-2014", "2801" => "pwrplan528", "257" => "agentek-q1-2012r", "591" => "agentek-q2-2012r/", "216" => "agentek-q4-2011r/", "1962" => "agentek-q2-2013r", "2532" => "agentekq42013", "1431" => "agentek-q4-2012r", "411" => "alterpoint-q1-2012r/", "981" => "alterpoint-q2-2012r/", "198" => "p50tbx06cxd", "240" => "alterpoint-q4-2011r/", "1562" => "alterpoint-q4-2012rec", "2122" => "alterpoint-q2-2013r", "1822" => "alterpoint-q1-2013r", "2512" => "alterpoint2013q4", "1211" => "alterpoint-q3-2012r", "1812" => "swag-feb-28r", "971" => "appdev-q2-2012r/", "1482" => "a7-q4-2012r", "2769" => "artemis226", "2825" => "artemis-nov-20", "1442" => "a9000-q4-2012rb", "2822" => "a9000-nov-12", "601" => "a9000-q2-2012r/", "2768" => "artemis211", "2821" => "aa-nov-5", "501" => "artemisfin-q1-2012r/", "235" => "artemisfin-q4-2011r/", "1472" => "artemisfin-q4-2012rb", "179" => "artemis611", "2770" => "artemis227", "2824" => "artemis-nov-18", "2002" => "artemis-q2-2013r", "2252" => "FocusonSupport", "2042" => "aurea523r", "1972" => "aurea57r", "1522" => "aurea-1-2013r", "1842" => "aurea-3-7rec", "2858" => "auto-trol-q2-2015/", "253" => "autotrol-q1-2012r/", "2752" => "auto-trol-q1-2014", "551" => "p4fwi253zbg", "183" => "autotrol-q3-2011r", "217" => "autotrol-q4-2011r/", "1652" => "auto-trol-q1-2013r", "2844" => "auto-trol-q1-2015", "2796" => "auto-trol-q2-2014", "2813" => "auto-trol-q4-2014", "2872" => "auto-trol-q3-2015/", "1401" => "autotrol-q4-2012r", "1892" => "auto-trol-q2-2013r", "2332" => "autotrolclockwork", "1081" => "autotrol-q3-2012r", "991" => "ki-6-12r", "2808" => "dr-moldover-oct-2014", "781" => "keyedin-4-25r", "2829" => "swag-dec-4", "2834" => "swag12215", "2835" => "swag2315", "2854" => "bigitmeeting-060915/", "2812" => "swag-sept-10", "2831" => "iot", "1301" => "swag-10-12r", "2692" => "swagkemsley2", "1001" => "pm-10-12r", "1752" => "berrydunn-feb27", "2865" => "confirmworkzone/", "247" => "corizon-q1-2012r/", "2182" => "kbm-july-2013r", "1131" => "equiteq7512r", "1341" => "sl-10-12r", "2837" => "berrydunn-feb-25", "2891" => "sag-11-12-15", "1852" => "swag-march-13r", "2886" => "pwrplan-10-14-15", "256" => "ecora-q1-2012r/", "691" => "ecora-q2-2012r", "186" => "ecora-q3-2011r", "225" => "ecora-q4-2011r/", "2442" => "ecoraq4", "1281" => "ecora-q3-2012r", "1832" => "ecora-q1-2013r", "2879" => "drmoldover-10-27-15", "2888" => "sourcelink-11-11-15", "2092" => "berrydunn-may29r", "2798" => "berrydunn-may-28/", "2805" => "swag-august-7", "2793" => "berrydunn-apr-30", "381" => "trident314r", "321" => "eti-q1-2012r", "811" => "eti-q2-2012r", "188" => "eti-q3-2011r/", "223" => "eti-q4-2011r/", "1582" => "eti-q4-2012ar", "2899" => "everest-q1-2016", "2032" => "everest-q2-2013-recording", "2828" => "everestq42014", "301" => "everest-q1-2012r/", "1782" => "everest-q1-2013r", "1732" => "everest-q1-2013r", "851" => "everest-q2-2012r/", "191" => "everest-q3-2011r", "2873" => "everest-q3-2015", "224" => "everest-q4-2011r/", "2836" => "everest-q1-2015", "2790" => "everest-q2-2014", "2803" => "everest-q3-2014", "2853" => "everest-q2-2015/", "2242" => "everest2013q3", "2742" => "everest2014q1", "1532" => "everest-q4-2012r", "1121" => "everest-q3-2012r", "2782" => "kbm327", "1421" => "artemis-q4-2012r", "1552" => "cpq-q4-2012r", "2785" => "pwrplan325", "2632" => "tangproprules", "2775" => "berrydunn-feb13", "1502" => "gensym-q4-2012r", "2522" => "gensymq413", "291" => "gensym-q1-2012r", "2765" => "gensym-q1-2014", "761" => "gensym-q2-2012r", "177" => "gensym-q3-2011r", "220" => "gensym-q4-2011r/", "2877" => "gensym-q4-2015/", "1932" => "gensym-may-2013r", "1702" => "gensym-q1-2013r", "311" => "geovue-q1-2012r/", "169" => "geovue-q3-2011r", "237" => "geovue-q4-2011r", "1111" => "geovue-q3-2012r", "2819" => "berrydunn-nov-5", "2773" => "swag-march-5", "2362" => "hclawandyoumon", "2392" => "HCLawandYouTh", "2372" => "HCLawandYouTue", "2382" => "hclawandyouwed", "1391" => "kbm-10-12r", "2779" => "pwrplan226", "2814" => "highjump-sept30", "2864" => "hipcricketvuc-07022015/", "2892" => "hipcricket-q4-2015", "2783" => "pwrplan319", "341" => "slfeb12r", "2612" => "softwareag112013", "531" => "rpw-3-12r", "2800" => "pwrplan514", "2802" => "swag-june-17", "2887" => "sag-11-10-15", "871" => "keyedin-5-12r", "2672" => "swagpartnerweb", "891" => "rpw-5-12r", "2795" => "sag-may-21", "2766" => "pwrplan129", "1021" => "catapult-6-12r", "2895" => "pwrplan-12-08-15", "1361" => "rpw-9-12r", "1632" => "rpw-9-12r", "2845" => "pb-april-2015", "2804" => "ignite-acorn-q3-2014", "2820" => "ignite-acorn-nov-2014", "2843" => "ignite-march-2015/", "2806" => "ignite-nuview-aug13", "2810" => "ignite-acorn-aug27", "2622" => "ignitemomentum", "2848" => "ignite-acorn-april-2015", "2815" => "ignite-oct-15", "2792" => "ignite-q2-2014", "2827" => "ignite-nov-20", "2826" => "ignite-nov-18", "2809" => "berrydunn-sept-10", "254" => "infopia-q1-2012r2/", "561" => "p36vv1qodkj/", "207" => "infopia-q4-2011r/", "1241" => "infopia-q3-2012r/", "2764" => "boyden-jan-2014", "2851" => "swag-april-2015", "2791" => "swag-apr-24", "2572" => "swagkemsley", "2830" => "highjump-dec-10", "2832" => "berrydunn-dec-9", "2882" => "sag-10-29-15/", "2847" => "sag-march-26", "2867" => "aptara-07-29-15/", "681" => "kbm42612rc", "2592" => "rpwnov13", "2774" => "losslovedone", "2682" => "sokolove-jan-2014", "2869" => "mmss/", "1722" => "boyden-2-2013r", "2880" => "sag-10-28-15", "2422" => "StCharlesCatapult", "401" => "gensymwbw-q1-2012r/", "2885" => "messageone-q4-2015", "2866" => "messageone_07282015/", "2901" => "messageone-q1-2016", "2852" => "messageone-4-29-15/", "192" => "metatomix-q3-2011r/", "2652" => "mobilemeetsmainframe", "941" => "keyedin-5-31r", "511" => "nextance-q1-2012r/", "204" => "p8taaagwr1d/", "1452" => "nextance-q4-2012r", "2861" => "nuview-q2-2015/", "2875" => "objectstore-q4-2015/", "2777" => "objectstore-q1-2014", "2552" => "objectstoreq413", "2342" => "objectstore-q3-2013", "1942" => "os-q2-2013r", "1762" => "os-feb-2013r", "2870" => "octmmss/", "2842" => "moldover-3-11", "2838" => "highjump-feb26", "1902" => "berrydunn-april24rec", "2472" => "optimanov13", "2876" => "sagds-10-29-15/", "2817" => "dr-pergolizzi-nov-12", "2272" => "icd10compliance", "2780" => "pm-mar-2014", "2807" => "p8vf3lpla0b", "2856" => "prologic-q3-2015", "2781" => "prologic-q1-2014", "861" => "prologic-q2-2012r/", "2841" => "prologic-q1-2015", "2811" => "prologic-q3-2014", "831" => "prologic-q3-2012r", "2562" => "prologicq42013", "1992" => "prologic-q2-2013r", "2302" => "roadmap", "1432" => "prologic-q4-2012r", "1742" => "prologic-q1-2013r", "1141" => "sl-7-12r", "821" => "abel-5-2012r", "208" => "pnet-q3-2011r/", "421" => "pnet-q1-2012r/", "238" => "pnet-q4-2011r/", "1792" => "pnet-q1-2013r", "2102" => "pnet-q2-2013r", "1572" => "pnet-q4-2012r", "2452" => "purchasingnetq4", "1011" => "pnet-q2-2012r", "571" => "p53aq1kx88r", "201" => "ravenflow-q3-2011r", "751" => "gensymwbw-q2-2012r/", "1882" => "gensym-q2-2013r", "2855" => "highjump-5-20-15/", "2878" => "sourcelink-10-21-15/", "791" => "sl-5-12r", "431" => "right90-q1-2012r/", "209" => "right90-q3-2011r/", "2482" => "right90q4", "2112" => "right90-q2-2013r", "1331" => "right90-q4-2012r", "1091" => "right90-q3-2012r", "1772" => "right90-q1-2013r", "2786" => "kbmhs327", "1311" => "boyden-octr", "2863" => "sag-june-30-15/", "2052" => "artemis620r", "2072" => "artemis627r", "2062" => "views626r", "2312" => "healthreform", "2282" => "sbhrw", "244" => "smartform2011r/", "1041" => "smartform-q2-2012r", "491" => "smartform-q1-2012r/", "1321" => "smartform-q3-2012r", "1602" => "smartform-q4-2012r", "2492" => "pwrplansmeco", "1251" => "gensym-q3-2012r", "2859" => "sagjune2015/", "2202" => "swag-july-15r", "2022" => "accept-may-2013r", "2788" => "sag-apr-22", "2794" => "stillsecure-q2-2014", "2582" => "stillsecuremomentum", "2432" => "stillsecureahead", "2862" => "powerplan_storm/", "2898" => "berrydunn-01-21-16", "1662" => "berrydunn-jan17r", "1642" => "berrydunn-jan17", "2772" => "pwrplan218", "931" => "procore-5-12r", "249" => "tenfold-q1-2012r/", "841" => "tenfold-q2-2012r/", "212" => "tenfold-q4-2011r/", "1712" => "testing", "2642" => "swagwalker", "1161" => "rpw-7-12r", "2462" => "boydennordic", "2816" => "dr-sinatra-oct-21", "1622" => "os-q1-2013rb", "2162" => "ignite-q3-2013r", "1952" => "pm-may-2013rec", "461" => "pm-3-12r", "2799" => "pm-solutions-june-2014", "175" => "t3jq2v4", "481" => "think3-q1-2012r", "1031" => "think3-q2-2012r/", "243" => "think3-q4-2011r", "1291" => "think3-q3-2012r", "1592" => "think3-q4-2012r", "2132" => "rpw-may-2013r", "2889" => "berrydunn-11-18-15", "2602" => "kbmtop10", "2874" => "aptara-09-2015/", "721" => "kbm512r", "258" => "triactive-q1-2012r/", "1692" => "triactive-q1-2013r", "2776" => "triactive-q1-2014", "581" => "triactive-q2-2012r/", "180" => "triactive-q3-2011r", "1181" => "triactive-q3-2012r", "210" => "triactive-q4-2011r/", "2262" => "triactiveq32013", "921" => "trilogy-jan-2013re", "2868" => "sourcelink-09-15-15/", "1221" => "sl-8-12r", "245" => "boyden-1-2012r", "2894" => "berrydunn-12-09-15", "181" => "versata-demo-2011r", "248" => "versata-q1-2012r", "213" => "versata-q4-2011r/", "1802" => "cpq-q1-2013r", "2322" => "VersataCPQ2013Q3", "1462" => "views-q4-2012rb", "2850" => "pb-5-13", "2890" => "pitneybowes-12-02-15", "1872" => "rpw-march-2013rec", "2839" => "pb2015", "2702" => "sag-mar-27", "2893" => "sag-12-10-2015/", "1381" => "cpq-q3-2012r", "15" => "b2cb2b", "2857" => "pmcollege-june-2015/", "2412" => "softwareag092013", "2212" => "rpw-july-2013r", "2818" => "rpw-oct-2014"); ?>

<head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <title>Rally Point Webinars</title>
    <meta name=description content="Webinar Production for when your important people are watching.">
    <meta property=og:url content="http://rallypointwebinars.com/course/webinar.php?id=<?php echo htmlspecialchars($_GET['id']) ?>">
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
    <meta name=twitter:site content="http://rallypointwebinars.com/course/webinar.php?id=<?php echo htmlspecialchars($_GET['id']) ?>">
    <link rel=canonical href="http://rallypointwebinars.com/course/webinar.php?id=<?php echo htmlspecialchars($_GET['id']) ?>">
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

        #research-insights-iframe {
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
    <iframe id=research-insights-iframe src="http://rpw.adobeconnect.com/<?php echo $courseMap[htmlspecialchars($_GET["id"])] ?>"
        frameborder=0 width=100% height=100%>
    </iframe>
</body>

</html>
