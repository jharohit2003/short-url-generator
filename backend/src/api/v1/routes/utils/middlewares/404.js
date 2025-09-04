export const error404= app.use((request,response,next)=>{
    response.send("<h2>Oops something went wrong<h2>");
})