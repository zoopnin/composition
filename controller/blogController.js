var BlogPost = require('../model/blog');

var post = new BlogPost({
	title : 'The Second post',
	author : 'Ning',
	body : 'I hope the second post be successed'
});

exports.addBlog = function(req,res,next){
	post.save(function(err){
		if(err){
			console.log('Saved error.');
		}else{
			console.log('Saved Ok.');
		}
	});
};

exports.findByName = function(req,res,next){
	var author = req.params.author ;
	BlogPost.findOne({author:author},function(err,doc){
		if(err){return err ;}else{res.send(doc);}
	});
	
};

