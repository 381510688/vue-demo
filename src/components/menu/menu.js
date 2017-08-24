export default {
  // 导航菜单的默认选中菜单
  normal: {
    overview: {
      routerPath: '/overview'
    },
    security: {
      routerPath: '/security/network/attack'
    },
    threaten: {
      routerPath: '/threaten/infogather'
    },
    forecast: {
      routerPath: '/forecast/riskquantify'
    },
    report: {
      routerPath: '/report/reportdetail'
    },
    sdc: {
      routerPath: '/sdc/fulltextsearch'
    },
    sysmgt: {
      routerPath: '/sysmgt/userauthority/userset'
    }
  },
  arr: [{
    routerPath: 'overview',
    name: '总览'
  }, {
    routerPath: 'security',
    name: '安全态势感知中心',
    children: [{
      icon: 'icon-synthesize',
      name: '综合安全态势',
      children: [{
        name: '历史趋势',
        routerPath: '/security/synthetical/historicaltrend'
      }, {
        name: '同比环比',
        routerPath: '/security/synthetical/yearonyear'
      }
      ]
    },
      {
        icon: 'icon-wangluoanquan1',
        name: '网络安全感知',
        children: [{
          name: '攻击态势',
          routerPath: '/security/network/attack'
        }, {
          name: '异常流量态势',
          routerPath: '/security/network/traffic'
        }, {
          name: '恶意操作态势',
          routerPath: '/security/network/operate'
        }, {
          name: '脆弱性态势',
          routerPath: '/security/network/fragile'
        }, {
          name: '资产安全态势',
          routerPath: '/security/network/assets'
        }]
      },
      {
        icon: 'icon-huaxiang',
        name: '行为画像感知',
        children: [{
          name: '用户画像',
          routerPath: '/security/behaviorportrait/userportrait'
        }, {
          name: '个人页面',
          hideMenu: true,
          routerPath: '/security/behaviorportrait/personalPage'
        }, {
          name: '攻击画像',
          routerPath: '/security/behaviorportrait/attackportrait'
        }, {
          name: '资产画像',
          routerPath: '/security/behaviorportrait/assetsportrait'
        }]
      },
      {
        icon: 'icon-kanshu03-copy',
        name: '山东安全感知',
        children: [{
          name: '金库审计',
          routerPath: '/security/shandong/treasuryaudit'
        }, {
          name: '营业员异常帐号审计',
          routerPath: '/security/shandong/accountaudit'
        }, {
          name: '营业员异常IP审计',
          routerPath: '/security/shandong/abnormalipaudit'
        }, {
          name: '营业员异常权限审计',
          routerPath: '/security/shandong/authorityaudit'
        }, {
          name: '异常登录绕行审计',
          routerPath: '/security/shandong/aroundaudit'
        }, {
          name: '异常登录审计',
          routerPath: '/security/shandong/unusualloginaudit'
        }, {
          name: '营业厅批操作',
          routerPath: '/security/shandong/batchoperation'
        }, {
          name: '营业厅IP审计',
          routerPath: '/security/shandong/ipaudit'
        }, {
          name: '营业厅靓号审计',
          routerPath: '/security/shandong/beautifulaudit'
        }, {
          name: '经分异常登录',
          routerPath: '/security/shandong/loginaudit'
        }, {
          name: '只查询不办理',
          routerPath: '/security/shandong/onlyquery'
        }, {
          name: '赠退费充值积分',
          routerPath: '/security/shandong/buypoint'
        }, {
          name: 'VPN账户变更',
          hideMenu: true,
          routerPath: '/security/shandong/vpnchange'
        }, {
          name: '操作依据审核',
          hideMenu: true,
          routerPath: '/security/shandong/operatereview'
        }]
      }, {
        icon: 'icon-kanshu03-copy',
        name: '安徽安全感知',
        children: [{
          name: '合作伙伴异常',
          routerPath: '/security/anhui/partnerexception'
        }, {
          name: '多IP登录分析',
          routerPath: '/security/anhui/iploginanalysis'
        }, {
          name: '疑似账号借用',
          routerPath: '/security/anhui/accountborrowed'
        }]
      },
      {
        icon: 'icon-biaoqian',
        name: '数据标签',
        hideMenu: true,
        children: [{
          name: '基础数据标签',
          routerPath: '/security/datatag'
        },
          {
            name: '业务扩展标签',
            routerPath: '/security/businesstag'
          }
        ]
      },
      {
        icon: 'icon-alarm',
        name: '告警',
        children: [{
          name: '安全事件处理',
          hideMenu: true,
          routerPath: '/security/alarm/eventhandling'
        }, {
          name: '告警态势统计',
          hideMenu: true,
          routerPath: '/security/alarm/alarmstatistics'
        }, {
          name: '数据库异常检测', // @add
          hideMenu: false,
          routerPath: '/security/alarm/dataexpdetect'
        }, {
          name: '告警动作处理',
          routerPath: '/security/alarm/alarmprocess'
        }]
      }
    ]
  },
    {
      routerPath: 'threaten',
      name: '威胁情报中心',
      children: [{
        icon: 'icon-intelligence',
        name: '情报采集',
        routerPath: '/threaten/infogather'
      }, {
        icon: 'icon-qbcl',
        name: '情报处理',
        routerPath: '/threaten/infoprocess'
      }, {
        icon: 'icon-yingyong', // @modified
        name: '情报应用',
        routerPath: '/threaten/infoapply'
      }]
    },
    {
      routerPath: 'forecast',
      name: '预测分析中心',
      children: [{
        icon: 'icon-fengxian',
        name: '风险量化分析',
        routerPath: '/forecast/riskquantify'
      }, {
        icon: 'icon-qushi',
        name: '趋势预测分析',
        children: [{
          name: '风险预测分析',
          routerPath: '/forecast/trendforecast/risk'
        }, {
          name: '部门预测分析',
          routerPath: '/forecast/trendforecast/department'
        }, {
          name: '区域预测分析',
          routerPath: '/forecast/trendforecast/area'
        }, {
          name: '业务应用预测分析',
          routerPath: '/forecast/trendforecast/business'
        }]
      }, {
        icon: 'icon-jieritequan',
        name: '重大节日分析',
        routerPath: '/forecast/greatfestival'
      }]
    }, {
      routerPath: 'report',
      name: '安全态势报告',
      hideMenu: false,
      children: [{
        icon: 'icon-mingxi',
        name: '报告明细',
        routerPath: '/report/reportdetail'
      }]
    }, {
      routerPath: 'sdc',
      name: 'SDC平台管理',
      children: [{
        icon: 'icon-file-fullTextSearch',
        name: '数据检索',
        routerPath: '/sdc/fulltextsearch'
      }, {
        icon: 'icon-yingyongjieru',
        name: '采集器管理',
        routerPath: '/sdc/dataaccessmgt',
      }, {
        icon: 'icon-etl',
        name: 'ETL管理',
        routerPath: '/sdc/etlmgt'
      }, {
        icon: 'icon-etl',
        name: '存储器管理',
        routerPath: '/sdc/storagemgt',
        /*
         children: [{
         name: '存储器管理',
         hideMenu: true,
         routerPath: '/sdc/storagemgt'
         }, {
         name: '添加存储器管理',
         hideMenu: true,
         routerPath: '/sdc/addstorage'
         }]
         */
      }, {
        icon: 'icon-etl',
        name: '告警管理',
        routerPath: '/sdc/alarmmgt'
      }]
    },
    {
      routerPath: 'sysmgt',
      name: '系统管理',
      children: [{
        icon: 'icon-xitongyunxing',
        name: '系统运行展示',
        hideMenu: true,
        routerPath: '/sysmgt/runshow'
      }, {
        icon: 'icon-yonghujiquanxianguanli',
        name: '用户权限管理',
        routerPath: '/sysmgt/userauthority',
        children: [{
          name: '用户设置',
          routerPath: '/sysmgt/userauthority/userset'
        }, {
          name: '角色设置',
          routerPath: '/sysmgt/userauthority/roleset'
        }, {
          name: '部门设置',
          routerPath: '/sysmgt/userauthority/usergroupset'
        }]
      }, {
        icon: 'icon-rizhixitong',
        name: '系统日志管理',
        routerPath: '/sysmgt/syslog'
      }, {
        icon: 'icon-zidiansousuo',
        name: '系统字典管理',
        routerPath: '/sysmgt/sysdictionary'
      },
        {
          icon: 'icon-zidiansousuo',
          name: '场景参数管理',
          routerPath: '/sysmgt/scenemgt',
          children: [{
            name: '安全检测',
            hideMenu: true,
            routerPath: '/sysmgt/scenemgt/securitydetection'
          }, {
            name: '各分析场景',
            routerPath: '/sysmgt/scenemgt/netanalysis'
          }, {
            name: '数据库异常检测',
            routerPath: '/sysmgt/scenemgt/sqldetection'
          }]
        }]
    }]
}
