const {readdir, readFile, writeFile} = require('fs')
const {resolve} = require('path')

function hasCut(filename) {
    return filename.split('-')[0] === 'cut'
}

function readFiles(dirname, onFileContent, onError) {
    readdir(dirname, function(err, filenames) {
        if (err) return onError(err)

        filenames.forEach(function(filename) {
            if(hasCut(filename)) return

            readFile(resolve(dirname, filename), 'utf-8', function(err, content) {
                if (err) return onError(err)

                onFileContent(filename, content)
            })
        })
    })
}

function formatTitle(title) {
    return title = title.replace(/-/g, ' ').split(' ').map(word => {
        word = word.split('')
        word[0] = word[0].toUpperCase()
        return word.join('')
    }).join(' ')
}

function insertTop(title) {
    return (
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Webinar Production for when your important people are watching.">
    <meta name="author" content="Brenton Cozby. https://brentoncozby.com">
    <title>${formatTitle(title)}</title>
    <!--if lt IE 9script(src='https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js', integrity='sha384-0s5Pv64cNZJieYFkXYOTId2HMA2Lfb6q2nAcx2n0RTLUnCAoTTsS0nKEO27XyKcY', crossorigin='anonymous')
    script(src='https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js', integrity='sha384-ZoaMbDF+4LeFxg6WdScQ9nnR1QC2MIRxA1O9KWEXQwns1G8UNyIEZIQidzb0T1fo', crossorigin='anonymous')-->
</head>
<body>
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top thinking" id="mainNav">
        <div class="container">
            <div class="navbar-header page-scroll"><button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> Menu<i class="fa fa-bars"></i></button>
                <a class="navbar-brand page-scroll" href="./index.html"><img src="images/rally-point-check-logo.png" alt=""></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="./services.html">Services</a></li>
                    <li><a href="./industries.html">Industries</a></li>
                    <li><a href="./thinking.html">Thinking</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a class="contact-navlink" href="./contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="article">
        <h2 class="title">${formatTitle(title)}</h2>
`
    )
}

function insertBottom() {
    return (
`
    </section>
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Contact Us</h2></div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <form id="contactForm" name="sentMessage" novalidate="">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group"><input class="form-control" id="name" type="text" placeholder="Name *" required="" data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group"><input class="form-control" id="email" type="email" placeholder="Email *" required="" data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group"><input class="form-control" id="phone" type="tel" placeholder="Phone *" required="" data-validation-required-message="Please enter your phone number.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group"><textarea class="form-control" id="message" placeholder="Message *" required="" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="col-lg-12 clearfix">
                                <div id="success"></div><button class="btn btn-xl" type="submit">Send Message</button></div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h3 class="section-subheading address"><a href="tel:617-517-0720">617-517-0720</a><br> 936 SW 1st Ave<br> Suite 250<br> Miami, FL 33130</h3></div>
            </div>
        </div>
    </section>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12"><span class="copyright">Copyright &copy; Rally Point Webinars 2017. All rights reserved.</span></div>
            </div>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js" integrity="sha384-mE6eXfrb8jxl0rzJDBRanYqgBxtJ6Unn4/1F7q4xRRyIw7Vdg9jP4ycT7x1iVsgb" crossorigin="anonymous"></script>
</body>

</html>
`
    )
}

function formatArticle(article) {
    const articleArray = article.split('\n')
    let articleStart = articleArray.indexOf('<body>') + 1
    let articleEnd = articleArray.indexOf('</body>')
    if(articleArray.indexOf('    <section class="article">') !== -1) {
        articleStart = articleArray.indexOf('    <section class="article">') + 2
    }
    if(articleArray.indexOf('    <section id="contact">') !== -1) {
        articleEnd = articleArray.indexOf('    <section id="contact">') - 1
    }

    article = articleArray.slice(articleStart, articleEnd).join('\n')

    return article
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/<p class="p1">/g, '')
        .replace(/<\/p><\/p>/g, '</p>')
        .replace(/&amp;/g, '&')
        .replace(/<span class="Apple-tab-span">	<\/span>/g, '')
}

function doItAll(folders) {
    folders.forEach(folder => {
        readFiles(resolve(__dirname, folder), (filename, content) => {
            content = formatArticle(content)

            if(content.indexOf('<section class="article">') === -1) {
                content = insertTop(filename.replace(/.html$/, '')) + content
            }

            if(content.indexOf('</section>\n<section id="contact">') === -1) {
                content = content + insertBottom()
            }

            writeFile(resolve(folder, filename), content, (err) => {
                if(err) throw err;
                console.log(`${folder}: Done with ${filename}`)
            })
        }, (err) => { throw err })
    })
}

const articlesFolders = ['the-big-picture', 'Content', 'event-execution', 'Marketing', 'Sales']
doItAll(articlesFolders)
