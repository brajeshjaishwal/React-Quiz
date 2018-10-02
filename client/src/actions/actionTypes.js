const actionTypes = {

    fetch_quiz_list: "fetch_quiz_list",
    fetch_quiz_list_succeded: "fetch_quiz_list_succeded",
    fetch_quiz_list_failed: "fetch_quiz_list_failed",

    fetch_quiz  : "fetch_quiz",
    fetch_quiz_failed : "fetch_quiz_failed",
    fetch_quiz_succeded : "fetch_quiz_succeded",

    create_quiz  : "create_quiz",
    create_quiz_failed : "create_quiz_failed",
    create_quiz_succeded : "create_quiz_succeded",

    create_question  : "create_question",
    create_question_failed : "create_question_failed",
    create_question_succeded : "create_question_succeded",

    submit_quiz  : "submit_quiz",
    submit_quiz_failed : "submit_quiz_failed",
    submit_quiz_succeded : "submit_quiz_succeded",

    submit_question  : "submit_question",
    submit_question_failed : "submit_question_failed",
    submit_question_succeded : "submit_question_succeded",

    attempt_question_list  : "attempt_question_list",
    attempt_question_failed  : "attempt_question_failed",
    attempt_question_succeded  : "attempt_question_succeded",

    fetch_score  : "fetch_score",
    fetch_score_failed  : "fetch_score_failed",
    fetch_score_succeded  : "fetch_score_succeded",

    login  : "login",
    login_failed  : "login_failed",
    login_success  : "login_success",

    register  : "register",
    register_failed  : "register_failed",
    register_success  : "register_success",
}

export default actionTypes