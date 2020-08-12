exports.get404 = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'page-not-found.html'));
    //res.sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
    res.render('404.pug', {pageTitle: 'Page not found'});
}