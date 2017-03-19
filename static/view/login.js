$(function () {
        $('#defaultForm').bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    message: '用户名验证失败',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 18,
                            message: '用户名长度必须在6到18位之间'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: '用户名只能包含英文字符和数字'
                        }
                    }
                },
                age: {
                	message: '年龄验证失败',
                    validators: {
                        lessThan: {
                            value: 99,
                            inclusive: true,
                            message: '年龄只能为18+到99之间'
                        },
                        greaterThan: {
                            value: 18,
                            inclusive: false,
                            message: '年龄只能为18+到99之间'
                        }
                    }
                }
            }
        });
    });
