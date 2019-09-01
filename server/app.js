//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const session=require("express-session")
const qs=require("qs")
// const JwtUtil = require('../jwt');
/*引入token的模块*/
const jwt=require("./jwt.js")
console.log(jwt.verifyToken)
/*引入路由模块*/
//const index1=require("./routes/index")
// 引入路由模块
//const details=require("./routes/details")
// 引入路由模块
//const login=require("./routes/login")
var server=express();
server.listen(5050);
//引入cors
const cors=require("cors");
//使用cors中间件跨域 只写一次，就可让整个服务端中所有接口都支持跨域
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080","http://127.0.0.1:8082","http://localhost:8082",
  "http://viptest.applinzi.com/","http://viptest.applinzi.com"],
	credentials:true
}))
//调用session
server.use(session({
	secret:"128位字符串",
	resave:true,
	saveUninitialized:true
}));

//使用body-parser中间件
server.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
server.use(express.static('./public'));
/*使用路由器来管理路由*/
//app.use("/index",index1)
//使用路由器管理路由
//app.use("/details",details) 
//使用路由器管理路由
//app.use("/login",login) 

//导入连接池
const mysql=require('mysql');
var pool=mysql.createPool({
 host:'w.rdc.sae.sina.com.cn',
 port:'3306',
 user:'xjll1j0w35',
 password:'',
 database:'021mmyy5m5ml0k0lx12k05m0kikj1ji4k4ykmywh',
 connectionLimit:20
});
/*
server.post("/login",(req,res)=>{
  var obj=req.body;
  console.log(obj)
	//判断非空
	 if(!obj.phone){res.send("2")}
	 if(!obj.upwd){res.send("3")}
	//连接数据库，查询用户表
	pool.query("select * from oppo_user where phone=? and upwd=?",[obj.phone,obj.upwd],(err,result)=>{
    if(err) throw err;
    console.log(result)
		if(result.length>0){
      
			//req.session.uname=result[0].uname;
			//req.session.uid=result[0].uid
			res.send("1");//1 表示登录成功
		}else{
			res.send("0");//0 表示用户名或密码错误
		}
	})
});

//app.use("/details",Details)
//服务端接口地址http://localhost:3000/details
//客户端请求时:
//http://localhost:3000/details?lid=1
server.get("/details",(req,res)=>{
  var lid=req.query.lid;
  var output={
    product:{},
    specs:[],
    pics:[]
  }
  if(lid!==undefined){
    var sql1=`select * from oppo_phone where lid=?`;
    pool.query(sql1,[lid],(err,result)=>{
      if(err) console.log(err);
      output.product=result[0];
      var family_id=output.product["family_id"];
      var sql2=`select spec,lid from oppo_phone where family_id=?`;
      pool.query(sql2,[family_id],(err,result)=>{
        if(err) console.log(err);
        output.specs=result;
        var sql3=`select * from oppo_pic where laptop_id=?`
        pool.query(sql3,[lid],(err,result)=>{
          if(err) console.log(err);
          output.pics=result;
          res.send(output);
        })
      })
    })
  }else{
    res.send(output);
  }
})

//查询手机号码是否已存在
server.get("/",function(req,res){
  var obj=req.query;
  if(!obj.phone){res.send("请输入手机号码")}
	pool.query("select * from oppo_user where phone=?",[obj.phone],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send("0");//0表示用户名已被占用
		}else{
			res.send("1");//1表示用户名可以使用
		}
	})
})

// 注册帐号
server.post("/reg",function(req,res){
	var obj=req.body;
	pool.query("insert into oppo_user set phone=?,upwd=?",[obj.phone,obj.upwd],function(err,result){
		if(result.affectedRows>0){
			res.send("1");//1表示注册成功
		}else{
			res.send("0");//0表示注册失败
		}
	});
});
*/
//1.查询轮播图 图片
server.get("/carousel",function(req,res){
	var obj=req.query;
	console.log(obj)
	pool.query("select * from vip_index_carousel",function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("1");
		}
	})
})
//1.2查询首页商品分类
server.get("/classify",function(req,res){
  var obj=req.query
	pool.query("select * from vip_index_classify",function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
			console.log(result)
		}else{
			res.send("1");
		}
	})
})

//1.3查询首页上架品牌
server.get("/brand",function(req,res){
	pool.query("select * from vip_index_brand",function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("1");
		}
	})
})
//2.查询详情页商品分类
server.get("/detailsClassify",function(req,res){
  var obj=req.query
	pool.query("select * from vip_details_classify",function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
			console.log(result)
		}else{
			res.send("1");
		}
	})
})
//2.2查询详情页上架品牌
server.get("/detailsBrand",function(req,res){
	pool.query("select * from vip_details_brand",function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("1");
		}
	})
})
//3.查询具体的商品型号
server.get("/productModel",(req,res)=>{
  var did=req.query.did;
  var output={
    product:{},
    specs:[],
    pics:[]
  }
 if(did!==undefined){
    var sql1=`select * from vip_product_details where did=?`;
    pool.query(sql1,[did],(err,result)=>{
      if(err) console.log(err);
			output.product=result[0];
			console.log(result)
      var pid=output.product.pid;
      var sql2=`select spec,did from vip_product_details where pid=?`;
      pool.query(sql2,[pid],(err,result)=>{
        if(err) console.log(err);
        output.specs=result;
        var sql3=`select * from vip_product_img where img_pid=?`
        pool.query(sql3,[did],(err,result)=>{
          if(err) console.log(err);
          output.pics=result;
          res.send(output);
        })
      })
    })
   }else{
    res.send(output);
   }
})
//3.1查询手机信号信息列表
server.get("/productList",function(req,res){
	pool.query("select * from vip_product_list",function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("1");
		}
	})
})
//4.登录 注册 查重
//用户登录
server.post("/login",(req,res)=>{
	console.log("请求")
 var obj=req.body;
  console.log(obj)
	//判断非空
	//  if(!obj.phone){res.send("2")}
	//  if(!obj.upwd){res.send("3")}
	//连接数据库，查询用户表
	pool.query("select * from vip_user_login where phone=? and upwd=?",[obj.username,obj.password],(err,result)=>{
    if(err) throw err;
    console.log(result)
		if(result.length>0){
			// req.session.phone=result[0].phone;
			// req.session.upwd=result[0].upwd
      // req.session.uid=result[0].uid
      console.log(res)		
      res.send({code:1,phone:result[0] 
      ["phone"],uid:result[0].uid,
      token:jwt.generateToken(result[0])
      });//1 表示登录成功
		}else{
			res.send("0");//0 表示用户名或密码错误
		}
	})
})
//4.1手机号码查重
server.get("/phone",function(req,res){
  var obj=req.query.username;
  if(!obj){
    res.send("0")
    return;
  }
	pool.query("select * from vip_user_login where phone=?",[obj],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send('1');//0表示用户名已被占用
		}else{
			res.send("2");//1表示用户名可以使用
		}
	})
})
//4.2注册帐号
server.post("/reg",function(req,res){
	var obj=req.body;
	pool.query("insert into vip_user_login set phone=?,upwd=?",[obj.username,obj.password],function(err,result){
		if(result.affectedRows>0){
      pool.query("select * from vip_user_login where phone=? and upwd=?",[obj.username,obj.password],(err,result)=>{
        if(err) throw err;
        console.log(result)
        if(result.length>0){
          res.send({code:1,phone:result[0] 
          ["phone"],uid:result[0].uid,
          token:jwt.generateToken(result[0])
          });//1 表示登录成功
        }
      })
      ;//1 表示登录成功
		}else{
			res.send("0");//0表示注册失败
    }
    
	});
});

//****************** 
//5:购物车
// ******************
//5.1查询指定用户购物车列表
server.get("/cart",(req,res)=>{
  //1:参数(无参数)
   var uid = req.query.uid
  //  console.log(req.session)
   console.log(req.query.uid)
   if(!uid){
     res.send({code:-1,msg:"请登录"});
     return;
   }
  //2:sql
  var sql = "SELECT * FROM vip_shoppingcart_item WHERE uid = ?";
  pool.query(sql,[uid],(err,result)=>{
    console.log(result)
    if(err)throw err;
    res.send({code:1,data:result})
  })
  //3:json
})
//5.2向购物车中添加数据
//将收藏商品向购物车中添加数据
server.get("/addCart",(req,res)=>{
  //1.找到购物车id
	var uid = req.query.uid
  //2：sql修改指定数据
  var sql ="INSERT INTO vip_shoppingcart_item VALUES(NULL,?,'1.jpg','唯品自营 | 三星S10+ 超感官全视屏骁龙855双卡双待（...',6050,6369,1) "
  //3:json
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
      if(result.affectedRows>0){
         res.send({code:1,msg:"修改成功"})
      }else{
        res.send({code:-1,msg:"修改失败"})
      }
  })
})
//5.3先登录操作成功后再查询购物车
//修改商品的数量;
server.get("/cartAdd",(req,res)=>{
  //1.找到购物车id
	var iid = req.query.uid
	console.log(iid)
	//2.找到商品数量count
	var count=req.query.count
	console.log(count)
  //2：sql修改指定数据
  var sql ="UPDATE vip_shoppingcart_item SET count=? WHERE iid=?"
  //3:json
  pool.query(sql,[count,iid],(err,result)=>{
    if(err) throw err;
      if(result.affectedRows>0){
         res.send({code:1,msg:"修改成功"})
      }else{
        res.send({code:-1,msg:"修改失败"})
      }
  })
})
//5.4删除购物车的商品
server.get("/cartDel",(req,res)=>{
  //1.删除购物车id
  var iid = req.query.iid
  //2：sql删除指定数据
  var sql ="DELETE FROM vip_shoppingcart_item WHERE iid = ?"
  //3:json
  pool.query(sql,[iid],(err,result)=>{
    if(err) throw err;
      if(result.affectedRows>0){
         res.send({code:1,msg:"删除成功"})
      }else{
        res.send({code:-1,msg:"删除失败"})
      }
  })
})
// ***********
//6.1添加收藏页
//******** 查看当前用户收藏的商品
server.get("/collect",(req,res)=>{
  //1:参数(无参数)
   var uid = req.query.uid
   if(!uid){
     res.send({code:-1,msg:"请登录"});
     return;
   }
  //2:sql
  var sql = "SELECT * FROM vip_collect_item WHERE uid = ?";
  pool.query(sql,[uid],(err,result)=>{
    console.log(result)
    if(err)throw err;
    res.send({code:1,data:result})
  })
  //3:json
})
//6.2将收藏商品向购物车中添加数据
server.get("/addCollect",(req,res)=>{
  //1.找到购物车id
	var uid = req.query.uid
  //2：sql修改指定数据
  var sql ="INSERT INTO vip_shoppingcart_item VALUES(NULL,?,'1.jpg','唯品自营 | 三星S10+ 超感官全视屏骁龙855双卡双待（...',6050,6369,1) "
  //3:json
  pool.query(sql,[pid,uid],(err,result)=>{
    if(err) throw err;
      if(result.affectedRows>0){
         res.send({code:1,msg:"修改成功"})
      }else{
        res.send({code:-1,msg:"修改失败"})
      }
  })
})
//6.2.1删除收藏商品
server.get("/delCollect",(req,res)=>{
  //1.删除购物车id
  var iid = req.query.iid
  //2：sql删除指定数据
  var sql ="DELETE FROM vip_collect_item WHERE iid = ?"
  //3:json
  pool.query(sql,[iid],(err,result)=>{
    if(err) throw err;
      if(result.affectedRows>0){
         res.send({code:1,msg:"删除成功"})
      }else{
        res.send({code:-1,msg:"删除失败"})
      }
  })
})
//6.3将当前商品添加收藏
server.get("/addCollect2",(req,res)=>{
  //1.找到购物车id
  var pid = req.query.pid
  var uid = req.query.uid
  var product_name = req.query.product_name
  var product_mark_price = req.query.product_mark_price
  //2：查询当前uid的收藏信息
  var sql ="INSERT INTO vip_collect_item VALUES(NULL,?,?,'1.jpg',?,?,6369) "
  //3:json
  pool.query(sql,[uid,pid,product_name,product_mark_price],(err,result)=>{
    if(err) throw err;
    console.log('如果后面有输出')
      if(result.affectedRows>0){
         res.send({code:1,msg:"修改成功"})
      }else{
        res.send({code:-1,msg:"修改失败"})
      }
    })
  })



//6.4 取消收藏
server.get("/delCollect2",(req,res)=>{
  var pid =req.query.pid
  var uid = req.query.uid
  var sql ="DELETE FROM vip_collect_item WHERE  uid=? and pid = ?"
  //3:json
  pool.query(sql,[pid,uid],(err,result)=>{
    if(err) throw err;
    console.log(result)
      if(result.affectedRows>0){
         res.send({code:1,msg:"删除成功"})
      }else{
        res.send({code:-1,msg:"删除失败"})
      }
    })
  })
//6.5当页面加载时,查询收藏页中是否有此商品
server.get("/selectCollect",(req,res)=>{
  //1:参数(无参数)
  var pid = req.query.pid
   var uid = req.query.uid
   if(!uid){
     res.send({code:-1,msg:"请登录"});
     return;
   }
  //2:sql
  var sql = "SELECT * FROM vip_collect_item WHERE uid = ? and pid =?";
  pool.query(sql,[pid,uid],(err,result)=>{
    console.log(result)
    if(err)throw err;
    res.send({code:1,data:result})
  })
  //3:json
})
  //产品分页显示
server.get("/product",(req,res)=>{
  //-参数
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  // -设置默认值
  if(!pno){pno=1}
  if(!ps){ps=2}
  //-创建第一条 sql语句 当前页
  var obj = {code:1,msg:"查询成功"};
  var sql = "SELECT * FROM vip_details_brand LIMIT ?,?";
  var off = (pno-1)*ps;
  ps = parseInt(ps);
  pool.query(sql,[off,ps],(err,result)=>{
      if(err)throw err;
      obj.data = result;
      var sql = "SELECT count(*) AS c FROM vip_details_brand";
      pool.query(sql,(err,result)=>{
        if(err)throw err;
        //result[{c:43}]
        var pc = Math.ceil(result[0].c/ps);
        obj.pc = pc;
        res.send(obj);
      })
  });
});  
//首页分页显示
/**********拦截器************** */
server.use((req, res, next)=>{ 
  if (req.url != '/login' ) {
    console.log(1)
    let token = req.headers.token;
    console.log(req.headers.token)
    console.log(2)
    console.log("req的响应头")
    let result = jwt.verifyToken(token);
    // 如果考验通过就next，否则就返回登陆信息不正确
    if(result===undefined){
      res.send({status:403, msg:"未提供证书"})
    }else if (result.name == 'TokenExpiredError') {
      res.send({status: 403, msg: '登录超时，请重新登录'});
		} 
		else if (result.name=="JsonWebTokenError"){
      res.send({status: 403, msg: '证书出错'})
		} 
		else{
      req.user=result;
      next();
    }
  } else {
    next();
  }
});
/****************************/ 