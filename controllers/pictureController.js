const Picture = require("../model/Picture");
const fs = require("fs");
const path = require('path');

exports.create = async (req,res) => {
    try{
        const {name}= req.body;
        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path,
        });
         await picture.save();
         res.json({picture,msg:"Imagem salva com sucesso!"})
    }catch(error){
        res.status(500).json({message:"Erro ao Salvar a imagem"})
    }
};
  exports.findAll = async(req,res)=>{
        try{
            const pictures= await Picture.find();
            res.json(pictures);
            
        }catch(error){
            res.status(500).json({message:"Erro ao buscar as imagens"})
        }

         
  };
  exports.findForRender = async(req,res)=>{
    try{
        const picture = await Picture.findById(req.params.id);
        const x = path.resolve(picture.src);
        res.sendFile(x);
        
    }catch(error){
        res.status(500).json({message:"Erro ao buscar as imagens"})
    }
  };
  exports.delete = async (req,res)=>{
    try{
        const picture = await Picture.findById(req.params.id);
        const picturedelete= await Picture.deleteOne({_id: req.params.id});
        fs.unlinkSync(picture.src);
        res.json({message:"imagem removida!"});

    }catch(error){
        res.status(500).json({message:"Erro ao buscar as imagens"})
    }
  };
  exports.deleteMany = async (req,res)=>{
    try{
        const picture = await Picture.deleteMany();
    }catch(error){
        res.status(500).json({message:"Erro ao buscar as imagens"})
    }
  };
