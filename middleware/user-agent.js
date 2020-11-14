//middleware menerima satu parameter context sebagai argumen
export default function(context){
    //add the useragent property to the context
    context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;
}