package com.damintsev.servlet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * User: adamintsev
 * Date: 16.10.13
 * Time: 17:46
 */
@Controller
@RequestMapping(value = "image")
public class ImageServlet {

    public ImageServlet(){
        System.err.println("FUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
    }

    //private static final Logger logger = LoggerFactory.getLogger(ImageServlet.class);

   // @Autowired
   // private ImageManager imageManager;

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<String> doGet() {
    return new ResponseEntity<String>("fuck", HttpStatus.OK);
    }


}