import Mock from 'mockjs'

Mock.mock('/music/test',/post|get/i,{
    'array|1-10':[
        {
            'name|+1':[
                'hello',
                'mock.js',
                '!'
            ]
        }
    ]
})