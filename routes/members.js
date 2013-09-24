
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'デモ' });
};

exports.divide = function(req, res){
  var members = new Array();
  var member1 = req.body.member1 || '';
  var member2 = req.body.member2 || '';
  var member3 = req.body.member3 || '';
  var member4 = req.body.member4 || '';
  var member5 = req.body.member5 || '';
  var member6 = req.body.member6 || '';
  var teams = req.body.teams || '';
  if (member1 != ''){members.push(member1);}
  if (member2 != ''){members.push(member1);}
  if (member3 != ''){members.push(member1);}
  if (member4 != ''){members.push(member1);}
  if (member5 != ''){members.push(member1);}
  if (member6 != ''){members.push(member1);}
  res.render('divide', { title: member1 });
};
