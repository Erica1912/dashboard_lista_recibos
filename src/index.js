import app from './app'
import './database/conection'
app.listen(app.get('port'))
//console.log('node',app.get('port'));