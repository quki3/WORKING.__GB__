import Project from '../model/Project';
import Task from '../model/Tasks';

export async function createTask(req,res){
    const {name,done,projectid} = req.body;
    const newTask = await Task.create({
        name,
        done,
        projectid
    },{
        fields:['name','done','projectid']
    });
    res.json({message:'new task created'});
}//RUNING

export async function getTasks(req,res){
    const Tasks = await Task.findAll({
        attributes:['id','projectid','name','done'],
        order:[
            ['id','DESC']
        ]
    });
    res.json({Tasks})
}//RUNING

export async function updateTask(req,res){
    const {id}=req.params;
    const {projectid,name,done}=req.body;

    const task = await Task.findOne({
        attributes:['name','projectid','done','id'],
        where:{id}
    });

    const updatedTask = await Task.update({
        name,
        done,
        projectid
    },{where:{id}});

    res.json({
        message:'Task Updated',
        updatedTask
    })
}//RUNING

export async function deleteTask(req,res){
    const {id} = req.params;
    await Task.destroy({
        where:{
            id
        }
    });
    res.json({message:'Task deleted'});
}//RUNING

export async function getOneTask(req,res){
    const {id} = req.params;
    
    const task = await Task.findOne({
        where:{
            id
        },
        attributes:['id','projectid','name','done']
    });
    res.json({task});
}

export async function getTasksByProject(req,res){
    const {projectid}=req.params;
    const tasks = await Task.findAll({
        attributes:['id','projectid','done','name'],
        where:{projectid}
    });
    res.json({tasks})
}