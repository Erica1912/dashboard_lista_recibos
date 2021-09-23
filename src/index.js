import app from './app'
app.listen(app.get('port'))
console.log('node',app.get('port'));