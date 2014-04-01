package com.damintsev.servlet;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * User: adamintsev
 * Date: 27.01.14
 */
@Controller
//@RequestMapping(value = "upload")
public class UploadServlet {


    @RequestMapping(value = "image", method = RequestMethod.GET)
    public  ResponseEntity<String> processFile()  {
            return new ResponseEntity<>("fuck", HttpStatus.OK);
    }


}
