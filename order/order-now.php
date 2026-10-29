<?php $page_title = "American Logo Artist | Order Now"; ?>
<?php $meta_keywords = "Keyword"; ?>
<?php $meta_content = ""; ?>
<?php $thisPage = 'American Logo Artist'; ?>
<?php $canonical= "" ?>
<?php include './include/header.php'; ?>

    <section class="page-title">
        <div class="container text-center">
            <h1>Let's Get Started with Your Project</h1>
            <p>Please Provide the information requested below.</p>
        </div>
    </section>

<section class="content-seq">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-9">
                <div class="row" style="display: flex;flex-wrap: wrap;">
                 
                    <div class="col-md-6 col-lg-7" data-form-type="ordernow_form">
                         <form id="orderForm" class="leadForm has-validation-callback" method="post"
                             action="thankyou">
                            <input type="hidden" name="price" value="999">
                            <input type="hidden" name="package" value="Logo<br>Infinite">
                            <div class="col-md-12 form-sec step-1-form">
                                <h4>Please Fill the Form</h4>
                                <ul>

                                    <li>
                                        <label>Name <span class="req-field-star">*</span></label>
                                        <input type="text" name="name" placeholder="Name" data-validation="required" required>
                                    </li>
                                    <li>
                                        <label>Email Address <span class="req-field-star">*</span></label>
                                        <input type="email" name="email" placeholder="Address" data-validation="email" required>
                                    </li>
                                    <li>
                                        <label>Phone Number <span class="req-field-star">*</span></label>
                                        <input type="tel" name="number" required placeholder="Phone Number"
                                            data-validation="number" maxlength="10"
                                            onkeyup="javascript: this.value = this.value.replace(/[^0-9]/g,'');"
                                            >
                                    </li>
                                    <li>
                                    <label>Your Message <span class="req-field-star">*</span></label>
                                    <textarea class="form-control" rows="3" required placeholder="Your Message" name="scomment"></textarea>
                                    </li>
                                    <li>
                                        <div class="g-recaptcha leadCaptcha" id="mainFormCaptcha"
                                            data-sitekey="data-validation=&quot;required&quot;">
                                        </div>
                                        <span id="mainFormCaptchaError"></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12 form-sec ">
                                <ul>
                                    <li class="submit-btn">
                                        <div id="formResult"></div>
                                        <input type="submit" class="tbtn btn-red a-btn" 
                                            name="signupForm" value="SUBMIT">
                                        <!-- </button> -->
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-3 sidebar">
                <h2><span>Need</span> Assistance?</h2>
                    <ul>
                        <li>
                             <a href="tel:(307) 218-3240">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <span>Toll Free:</span> (307) 218-3240 </a>
                                 </li>
    <li><a onclick="zE.activate();" href="javascript:;" class="chat"><i class="fa fa-comments" aria-hidden="true"></i>
            <span>Live Chat:</span>with our design expert</a>
    </li>
</ul>            </div>
        </div>
    </div>
</section>

<?php include './include/footer.php'; ?>
