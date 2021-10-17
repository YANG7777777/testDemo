export const reportConfig = {
  tableTtle: [
    {
      label: '委员会',
      children: [
        { label: '居委会小组', prop: 'xiaozu' },
        { label: '居委会办公室', prop: 'bangongs' },
        {
          label: '居委会活动室',
          children: [
            { label: '活动室一', prop: 'huodongshi1' },
            { label: '活动室二', prop: 'huodongshi2' },
            { label: '活动室三', prop: 'huodongshi3' }
          ]
        },
        { label: '居委会器材', prop: 'qicai' }
      ]
    },
    { label: '居委会', prop: 'ju' },
    { label: '运动会', prop: 'yun' },
    { label: '慰问金', prop: 'wei' }
  ],
  tableData: [
    { date: '总计', xiaozu: '1', bangongs: '4', huodongshi1: '6', huodongshi2: '4', huodongshi3: '3', qicai: '3', ju: '4', yun: '5', wei: '5' }
  ]
}
