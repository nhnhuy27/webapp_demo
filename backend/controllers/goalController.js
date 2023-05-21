const asyncHandler =  require('express-async-handler')


//desc: get all goals
//route: GET /api/goals
//access: private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})
//desc: set a goal
//route: POST /api/goals
//access: private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text)
    {
        res.status(400)
        throw new Error('please add text    ')  
    }
    res.status(200).json({message: 'Set goal'})
})

//desc: update a goal
//route: PUT /api/goals/:id
//access: private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//desc: delete a goal
//route: DELETE  /api/goals/:id
//access: private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}