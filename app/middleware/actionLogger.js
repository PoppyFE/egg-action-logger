'use strict';

module.exports = () => {

  return async function (ctx, next) {
    const { logger, request, query } = ctx;

    const cfg = ctx.app.config.actionLogger;
    const afterLog = cfg.afterLog;
    const sendLog = cfg.sendLog;

    const requestParams = Object.assign({}, query , request.body);

    ctx.actionLogger = {
      disable: false,
      data: {
        app_id: cfg.appId || '',
        operator_group: '',
        operator_name: '',
        action_group: '',
        action_group_name: '',
        action: ctx.url,
        action_name: ctx.url,
        session_token: ctx.accessData ? ctx.accessData.accessToken : '',
        ip_address: ctx.ip,
        request_params: JSON.stringify(requestParams),
        op_result_msg: '',
        op_result_details: '',
        action_date: new Date(),
        action_level: '1',
      }
    };

    await next();

    // 在业务里面销毁了该对象 || 该次请求禁用actionLogger
    if (!ctx.actionLogger || ctx.actionLogger.disable) {
      return;
    }

    ctx.runInBackground(async () => {
      if (typeof afterLog === 'function') {
        await afterLog(ctx);
      }

      if (typeof sendLog === 'function') {
        await sendLog(ctx);
      }
    });
  }
};
