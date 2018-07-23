/**
 * Created by alex on 2017/9/16.
 */

'use strict';

module.exports = {

  async actionLog(data = {}, opts = {}) {
    const ctx = this;
    const { query, request} = ctx;

    const requestParams = Object.assign({}, query , request.body);

    data = Object.assign({
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
    }, data);

    const remoteLog = opts.remoteLog || ctx.app.config.actionLogger.remoteLog;

    ctx.runInBackground(async () => {
      await remoteLog(ctx, data, opts);
    });
  },
};
