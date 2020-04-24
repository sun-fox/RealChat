var express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static(path.join(__dirname, 'public')))









const PORT = 3000||process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
