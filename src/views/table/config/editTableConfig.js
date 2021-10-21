export const reportConfig = {
  tableTtle: [{
    label: '委员会',
    children: [{
      label: '居委会小组',
      prop: 'xiaozu',
      CanEdit: true
    },
    {
      label: '居委会活动室',
      children: [{
        label: '活动室一',
        prop: 'huodongshi1',
        CanEdit: true
      },
      {
        label: '活动室二',
        prop: 'huodongshi2',
        CanEdit: true
      },
      {
        label: '活动室三',
        prop: 'huodongshi3',
        CanEdit: true
      },
      {
        label: '总计',
        prop: 'zongji'
      }
      ]
    },
    {
      label: '居委会器材',
      prop: 'qicai',
      CanEdit: true
    }
    ]
  },
  {
    label: '居委会',
    prop: 'ju',
    CanEdit: true
  },
  {
    label: '运动会',
    prop: 'yun',
    CanEdit: true
  },
  {
    label: '备注',
    prop: 'bei',
    CanEdit: true
  }
  ],
  tableData: [{
    row_head: '测试数据',
    xiaozu: '1',
    bangongs: '4',
    huodongshi1: '6',
    huodongshi2: '4',
    huodongshi3: '3',
    zongji: '13',
    qicai: '3',
    ju: '4',
    yun: '5',
    bei: '5'
  }]
}
