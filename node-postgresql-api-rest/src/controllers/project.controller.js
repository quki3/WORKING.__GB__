//para poder guardar los datos traemos el schema de sequelize que esta en model
import Project from "../model/Project";

//consultar datos 
export async function getProjects(req,res){
  try{
  const project = await Project.findAll();
  res.json({
    data:project
  });
  }catch(e){
    console.log(e)
  }
}//RUNING with manage of error

//crear datos
export async function createProject(req, res) {
  //para extraer lo que me estan enviando en la ruta post
  const { name, priority, description, deliverydate } = req.body;
  try {
    //guardando los datos recuerda que el guardado puede tomar tiempo asignale un await
    let newProject = await Project.create({
      name,
      priority,
      description,
      deliverydate,
    },{
        fields:['name','priority','description','deliverydate']
    });
    if (newProject) {
      return res.json({
        message: "Project created successfully",
        data: newProject
      });
    }
    res.send("date received");
  } catch (error) {
      console.log(error);
      res.status(500).json({
          message:'Somethign goes wrong',
          data:{}
      })
  }
}//RUNING with manage of error

//consultar datos de un solo project
export async function getOneProject(req,res){
  const { id } = req.params;
  const project = await Project.findOne({
    where:{
      id
    }
  });
  res.json(project);
}//RUNING

//eliminar project
export async function deleteProject(req,res){
  const {id} = req.params;
  const deleteRowCount = await Project.destroy({
    where:{
      id
    }
  });
  res.json({
    message:'Project Deleted succesfully',
    count:deleteRowCount
  });
}//RUNING

//actulizar los projectos
export async function updateProject(req,res){
  //lo que voy a actualizar
  const {id}= req.params;
  //los datos que voy a actualizar
  const { name,priority,description,deliverydate}=req.body

  //buscando todos los projectos
  const projects = await Project.findAll({
    attributes:['id','name','priority','description','deliverydate'],
    where:{
      id
    }
  });

  //recorriendo cada project y actualizarlos
  if(projects.length > 0 ){
    projects.forEach(async project => {
      await project.update({
        name,
        priority,
        description,
        deliverydate
      });
    });
  }

  //dandole una respuesta al usuario 
  return res.json({
    message:'Project Update Successfully',
    data:projects
  })
}//RUNING
