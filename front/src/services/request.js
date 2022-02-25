
export function httpRequest(method,url,body=null,header={'Content-Type':'application/json'}) {
    fetch(url,{
        method:method,
        header:header,
        body:body
    });
}

export function POST(url,body,header=false){   
    header?  httpRequest("POST",url,body):httpRequest("POST",url,body,header)
}
export function PUT(url,body,header=false){   
    header?  httpRequest("PUT",url,body):httpRequest("POST",url,body,header)
}
export function DELTE(url,body,header=false){   
    header?  httpRequest("DELETE",url,body):httpRequest("POST",url,body,header)
}
export function GET(url,body,header=false){   
    header?  httpRequest("GET",url,body):httpRequest("POST",url,body,header)
}

