enum HttpConstants {
    BACKEND_REST = 'rest',
    BACKEND_GRAPH_QL = 'graphql',

    KEY_GET = 'GET',
    KEY_POST = 'POST',

    ERR_HTTP_TIMEOUT = "Cannot connect to server.",
    ERR_HTTP_NO_CONNECTION = "Cannot connect to server.",
    ERR_HTTP_INVALID_DATA = "Invalid data returned from request.",

    ERR_HTTP_404_NOT_FOUND = "The requested url was not found.",
    ERR_HTTP_400_BAD_REQUEST = "Invalid data submitted",
    ERR_HTTP_500_BAD_SERVER = "An error occurred. Please try again later",

    KEY_META = 'meta',
    KEY_RESULTS = 'results',
    KEY_NEXT = 'next',
    KEY_PREVIOUS = 'previous',
    KEY_COUNT = 'count'
}

export default HttpConstants;
