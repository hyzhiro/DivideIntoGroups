
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'デモ' });
};

exports.divide = function(req, res){
  var members = new Array();
  var team_members = new Array();
  var member1 = req.body.member1 || '';
  var member2 = req.body.member2 || '';
  var member3 = req.body.member3 || '';
  var member4 = req.body.member4 || '';
  var member5 = req.body.member5 || '';
  var member6 = req.body.member6 || '';
  var teams = req.body.teams || '';
  var randnum;
  var i;

  if (member1 != ''){members.push(member1);}
  if (member2 != ''){members.push(member2);}
  if (member3 != ''){members.push(member3);}
  if (member4 != ''){members.push(member4);}
  if (member5 != ''){members.push(member5);}
  if (member6 != ''){members.push(member6);}

  if(members.length < req.body.teams){
    //人数が足りないとき
    res.render('divide', { title: req.body.teams + '人必要です。' });
  }else{
    for(i = 0; i < req.body.teams;i = i + 1){
      team_members[i] = new Array();
    }
    i = 0;
    while(members.length > 0){
      if(i == req.body.teams){
        i = 0;
      }
      randnum = Math.floor(Math.random() * members.length);
      team_members[i].push(members[randnum]);
      members.splice(randnum, 1);
      i = i + 1;
    }
    for(i = 0; i < req.body.teams;i = i + 1){
      console.log(i + 'チーム目');
      console.log(team_members[i]);
    }
    res.render('divide', { title: team_members });
  }
};
