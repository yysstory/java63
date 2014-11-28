package java63.web03.control;

import java.io.File;
import java63.web03.dao.MakerDao;
import java63.web03.dao.ProductDao;
import java63.web03.domain.Product;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;


//방법 1) @Component("/product/add.do")
//방법 2) @Component
//방법 3) @Component
//방법 3) @RequestMapping("/product/add.do")
//방법 4) @Component
//방법 4) @RequestMapping("/product")
@Component
@RequestMapping("/product/add.do")
public class ProductAddControl {
  @Autowired MakerDao makerDao;
  @Autowired ProductDao productDao;
  @Autowired ServletContext servletContext;

  //방법 1) @RequestMapping
  //방법 2) @RequestMapping("/product/add.do")
  //방법 3) @RequestMapping
  //방법 4) @RequestMapping("/add.do")
  @RequestMapping(method=RequestMethod.GET)
  public ModelAndView form() throws Exception {
    ModelAndView mv = new ModelAndView();
    mv.addObject("makers", makerDao.selectNameList());
    mv.setViewName("/product/ProductForm.jsp");
    return mv;
  }
  // Model은 request에 담을 값을 보관할 임시 저장소
  /*
  public String form(Model model) throws Exception {
    model.addAttribute("makers", makerDao.selectNameList());
    return "/product/ProductForm.jsp";
  }*/
  
  /* Map은 request에 담을 값을 보관할 임시 저장소
  public String form(Map<String,Object> model) throws Exception {
    model.put("makers", makerDao.selectNameList());
    return "/product/ProductForm.jsp";
  }*/
  
  
  @RequestMapping(method=RequestMethod.POST)
  public String add(
      String name,
      int qty,
      int mkno,
      @RequestParam MultipartFile photo) throws Exception {  

    String fileuploadRealPath = 
        servletContext.getRealPath("/fileupload");
    String filename = System.currentTimeMillis() + "_"; 
    File file = new File(fileuploadRealPath + "/" + filename);
    photo.transferTo(file);
    
    Product product = new Product();
    product.setName(name);
    product.setQuantity(qty);
    product.setMakerNo(mkno);
    product.setPhoto(filename);

    productDao.insert(product);
    productDao.insertPhoto(product);
    return "redirect:list.do";
  }

}












