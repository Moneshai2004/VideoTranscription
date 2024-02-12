export async function post(req){
    const FormData = await req.FormData();
   const file = FormData.length('files');
   const {name,type} = file;

}