webpackJsonp([39],{2201:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(322),a=s(2202),i=function(t){return t&&t.__esModule?t:{default:t}}(a),o=s(42),u=function(t){return{isCheckingTask:t.student.doTask.isCheckingTask,checkingTask:t.student.topTaskList.checkingTask}},r=function(t){return{checkTaskSuccess:function(e){t((0,o.check_some_task_success)(e))},finishSomeTask:function(e){t((0,o.finish_some_task)(e))}}},c=(0,n.connect)(u,r)(i.default);e.default=c,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"mapStateToProps","D:/Work/yjyx_web/src/containers/student/task/doStudentTask.js"),__REACT_HOT_LOADER__.register(r,"mapDispatchToProps","D:/Work/yjyx_web/src/containers/student/task/doStudentTask.js"),__REACT_HOT_LOADER__.register(c,"default","D:/Work/yjyx_web/src/containers/student/task/doStudentTask.js"))}()},2202:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=s(336),r=n(u),c=s(208),l=n(c),f=s(35),p=n(f),d=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}();s(337),s(302),s(36);var h=s(5),k=n(h),m=s(23),_=s(86),b=n(_),y=s(1682),g=(n(y),s(1894)),v=(n(g),s(1895)),T=(n(v),s(1574)),w=n(T),E=s(1505),O=n(E),x=s(1661),S=n(x);s(2203);var A=function(t){function e(t){a(this,e);var s=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return s.state={countTime:0,questions:[],taskInfo:{},unWriteQuestionNumber:0,visible:!1},s}return o(e,t),d(e,[{key:"countTime",value:function(t){this.setState({countTime:t})}},{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params;w.default.getQuestionType(e.subjectId).then(function(s){w.default.getQuestion(e.taskId).then(function(e){var n=w.default.generateQuestion(e.questions,e.questionlist,s);t.setState({questions:n,taskInfo:e.task_detail_info}),t.props.isCheckingTask&&t.props.checkTaskSuccess(t.props.checkingTask.id)}).catch(function(t){console.log(t)})})}},{key:"componentWillReceiveProps",value:function(t){var e=this;t.match.params.taskId!==this.props.match.params.taskId&&w.default.getQuestionType(t.match.params.subjectId).then(function(s){w.default.getQuestion(t.match.params.taskId).then(function(n){var a=w.default.generateQuestion(n.questions,n.questionlist,s);e.setState({questions:a,taskInfo:n.task_detail_info}),t.isCheckingTask&&t.checkTaskSuccess(e.props.checkingTask.id)}).catch(function(t){console.log(t)})}).catch(function(t){return console.log(t)})}},{key:"selectOption",value:function(t,e,s,n,a){this.state.questions[s].list[e-1].result.answer=[t],console.log(this.state.questions),this.setState(this.state)}},{key:"multiSelectOption",value:function(t,e,s,n,a){this.state.questions[s].list[e-1].result.answer=t,this.setState(this.state)}},{key:"answerQuestion",value:function(t,e,s,n,a){this.state.questions[s].list[a-1].subQuestion[e-1].result.answer=[t],this.setState(this.state)}},{key:"answerBlankQuestion",value:function(t,e,s,n,a,i){this.state.questions[n].list[i-1].subQuestion[s-1].result.answer[e-1]=t,this.forceUpdate()}},{key:"changeWriteProcess",value:function(t,e,s,n,a,i){var o=void 0;i?(o=this.state.questions[s].list[a-1].subQuestion[e-1],o.result.writeprocess=t&&t.map(function(t){return t.url})):(o=this.state.questions[s].list[e-1],o.result.writeprocess=t&&t.map(function(t){return t.url})),this.setState(this.state)}},{key:"showQuestion",value:function(t,e){return t&&k.default.createElement(O.default,{data:t,status:e})}},{key:"submitResult",value:function(t,e,s){var n=this,a={action:"submit_task",answer:JSON.stringify(s),taskid:t,spendtime:e,submit:1};m.Networker.snatch(b.default.tasks,"POST",a).then(function(e){console.log(e),0==e.retcode?(p.default.success("别忘了提醒家长及时检查老师才能收到作业哦！"),n.props.finishSomeTask(t)):1==e.retcode&&p.default.error(e.msg),n.props.history.push("/student/task-feedback/normal/"+t)}).catch(function(t){console.log(t)})}},{key:"submitTask",value:function(){var t=this;w.default.composeAnswer(this.state.questions).then(function(e){var s=t.props.match.params,n=s.taskId;console.log(e,"compose Answer"),0!==e.unAnswerCount?t.setState({visible:!0,studentAnswer:e.studentAnswer,unWriteQuestionNumber:e.unAnswerCount}):t.submitResult(n,t.state.countTime,e.studentAnswer)})}},{key:"okSubmitResult",value:function(){var t=this.props.match.params,e=t.taskId;this.submitResult(e,this.state.countTime,this.state.studentAnswer),this.setState({visible:!1})}},{key:"cancelSubmit",value:function(){this.setState({visible:!1})}},{key:"rollback",value:function(t){this.props.history.push("/student/task/"+t)}},{key:"render",value:function(){var t=this.showQuestion(this.state.questions,1),e=this.state.taskInfo.suggestspendtime,s=this.props.match.params.page;return k.default.createElement("div",{className:"panel-playground"},k.default.createElement(l.default,{onClick:this.rollback.bind(this,s),className:"rollback",icon:"rollback"},"返回"),k.default.createElement("div",{className:"task-info"},k.default.createElement("h3",{className:"task-info-name"},"作业名称: ",this.state.taskInfo.resource_name),k.default.createElement("p",{className:"task-info-description"},"作业描述: ",this.state.taskInfo.description),k.default.createElement("p",{className:"task-info-time"},k.default.createElement("span",{className:"task-info-item"},"建议用时:",e?e+"分钟":"0分钟"),k.default.createElement("span",{className:"task-info-item"},"实际用时:",k.default.createElement(S.default,{countTime:this.countTime.bind(this)})))),t,k.default.createElement("div",{className:"panel-footer"},k.default.createElement(l.default,{type:"primary",ghost:!0,onClick:this.submitTask.bind(this)},"提交")),k.default.createElement(r.default,{title:"作业提交",visible:this.state.visible,onOk:this.okSubmitResult.bind(this),onCancel:this.cancelSubmit.bind(this)},k.default.createElement("p",null,"您还有"+this.state.unWriteQuestionNumber+"题未做，是否确认提交？")))}}]),e}(h.Component),R=A;e.default=R,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(A,"DoTask","D:/Work/yjyx_web/src/components/student/task/doTask.js"),__REACT_HOT_LOADER__.register(R,"default","D:/Work/yjyx_web/src/components/student/task/doTask.js"))}()},2203:function(t,e,s){var n=s(2204);"string"==typeof n&&(n=[[t.i,n,""]]);var a={};a.transform=void 0,s(117)(n,a),n.locals&&(t.exports=n.locals)},2204:function(t,e,s){e=t.exports=s(116)(void 0),e.push([t.i,".panel-playground{max-width:1100px;width:100%;margin:40px auto;padding:16px;-webkit-box-shadow:0 0 0 16px hsla(0,0%,100%,.2);box-shadow:0 0 0 16px hsla(0,0%,100%,.2);border-radius:20px;position:relative}.panel-playground .rollback{position:absolute;right:8px;top:20px;z-index:10}.panel-playground .task-info{margin:8px;padding:8px;border-bottom:1px solid #fff}.panel-playground .task-info .task-info-description,.panel-playground .task-info .task-info-name,.panel-playground .task-info .task-info-time{margin:8px 0}.panel-playground .task-info .task-info-time .task-info-item{margin-right:16px}.panel-playground .panel-footer{margin:20px auto;text-align:center}",""])}});