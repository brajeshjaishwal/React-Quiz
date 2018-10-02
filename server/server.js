const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

app = new express()
//run database
const { User, Score, Question, Student, Teacher, Group } = require('./db/index')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/welcome', (req, res) => {
    res.send('welcome')
})

//create quiz group
app.post('/Quiz/Create', async (req, res) => {
    try{
        var name = req.body.group
        var user = req.header.user
        if(!user || !user.name)
        {
            return res.send({message: 'user is not found'})
        }
        else if(user.userType !== 'teacher') {
            return res.send({quiz: null, message: 'only teacher can create quiz.'})
        }
        else {
            var group = await Group.findOne({name})
            if(group)
            {
                return res.send({message: 'Quiz group already exist, choose a different name.'})
            }
            else {
                group = Group({ name: req.body.group,
                                teacher: user._id })
                await group.save()
            }
            res.send({quiz: group, message: 'quiz successfully created.'})
        }
    }catch(Error)
    {
        res.send({quiz: null, message: 'some error occurred.'})
    }
})

//create question
app.post('/Quiz:{id}/questions', async (req, res) => {

    try{
        const user = req.header.user
        if(!user || user.userType !== 'teacher')
        {
            return res.send({message: 'user not valid'})
        }
        const id = req.params.id
        const detail = req.body.question
        const answers = req.body.answers
        const correct = req.body.correct
        var group = Group.findById(id)
        if(group) {
            //first check if that question already exist or not
            var question = Question({
                detail,
                answers,
                correct,
            })
            await question.save()
            res.send({message: 'question successfully created', question})
        }else {
            res.send({message: 'quiz does not exist.'})
        }
    }catch(Error){
        res.send({message: 'some error occurred.'})
    }
})

//return quiz list
app.get('/Quiz', async (req, res) => {
    try{
        const quiz = await Group.find({}) //find all quizes
        res.send({quiz})
    }catch(Error)
    {
        res.send({message: 'some error occurred while retriving the data.'})
    }
})

//return question list from a quiz
app.get('/Quiz/Groups:{id}/questions', async (req, res) => {
    try{
        const quiz = await Group.findById({id: req.params.id})
        if(quiz) {
            const questions = await Question.findById({id: quiz.questions})
            res.send({ group: quiz.name, questions })
        }
        res.send({group: quiz.name})
    }catch(Error)
    {
        res.send({message: 'some error occurred while retriving the data.'})
    }
})

app.post('/register', async (req, res) => {
    try{
        console.log(req.body)
        var user = await User.findOne({name: req.body.name})
        if(user)
            return res.send({message: 'user already exist.'})
        else {
            user = User(req.body)//brings name and userType
            await user.save()
            if(req.body.userType === 'student') {
                var student = Student({userid: user._id})
                await student.save()             
            }else {
                var teacher = Teacher({userid: user._id})
                await teacher.save()
            }
            res.send(user)
        }
    }catch(Error){
        res.send({message: 'some error occurred.'})    
    }
})

app.post('/login', async (req, res) => {
    try{
        let user = await User.findOne({name: req.body.name})
        req.header.user = user
        res.send({user: {name:user.name,userType:user.userType}})
    }catch(Error)
    {
        res.send({user: null, message: 'user does not exist.'})
    }
})

const port = process.env.PORT || '3300'
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
