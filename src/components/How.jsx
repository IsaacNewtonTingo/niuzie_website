import React from "react";

export default function How() {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-dark via-cardColor to-dark px-20 py-10">
        <h1 className="text-myOrange font-bold text-[30px]">How it works</h1>
        <p className="text-lightBlue mt-10">
          The below section describes various steps to take when interacting
          with Niuzie mobile app either as a seller listing their products or as
          a buyer looking for specific items.
        </p>
        <br />
        <p className="text-lightBlue font-bold">1. Listing a product</p>
        <br />
        <p>
          Every regular user has the ability to post at most 2 products for
          free. This products will be active for three months upon approval by
          the admin. Ten days to the end of this period, you will receive a
          message that your product is almost expiring so that you can renew it.
          <br /> <br /> When this period ends without renewal, your product will
          be inactive but you can still renew it for free. If you have exceeded
          the limit, you will be required to pay KSH. 50 for every product you
          post but they will still wait for approval from the admin.This takes a
          few minutes to a maximum of 24 hours. The products will also expire
          after three months and you will be required to renew them.
          <br />
          <br /> If you are a premium user, you will be able to post unlimited
          number of products but they will still wait for approval from the
          admin.This takes a few minutes to a maximum of 24 hours. The products
          will also expire after three months and you will be required to renew
          them.
        </p>
      </div>

      <br />
      <br />

      <div className="px-20 py-10">
        <p className="font-bold">a. Listing products for free</p> <br />
        <div className="flex items-center justify-between">
          <li className="w-[70%]">
            Click on the plus icon in the bottom tab navigation. This will open
            a screen that will give you two options (Posting a product you are
            selling or posting a product you are looking for)
          </li>

          <img
            className="w-[25%] border-[1px] border-gray-800 rounded-lg"
            src="/post-options.jpeg"
            alt="post-options-niuzie"
          />
        </div>
      </div>
      <div className="flex items-center justify-between bg-gradient-to-r from-dark via-cardColor to-dark px-20 py-10">
        <div>
          <li className="w-[70%]">
            Go ahead and click “Post product” button. If you haven't created an
            account, a registration window will show. Finish the registration
            process then come back and continue the process.
          </li>
          <br />
          <li className="w-[70%]">
            If you are already logged in this screen will open where you will
            enter your product details including images of the given product.
            You will only be able to add up to 8 images.
          </li>
        </div>

        <img
          className="w-[25%]  border-[1px] border-gray-800 rounded-lg"
          src="/post-product.jpeg"
          alt="post-product-niuzie"
        />
      </div>
      <div className="flex items-center justify-between px-20 py-10">
        <div>
          <li className="w-[70%]">
            Note that your personal details at the bottom cannot be edited in
            this screen. Navigate to your profile to perform this functionality.
          </li>
          <br />
          <li className="w-[70%]">
            After you have entered all the required fields, scroll to the bottom
            of the screen and press the “Post product” button
          </li>
          <br />

          <li className="w-[70%]">
            This will automatically post your product and your product details
            screen will open.
          </li>
          <br />

          <li className="w-[70%]">
            You will have to wait for your product to be reviewed by the admin
            before it can go live for everyone to view. This takes a few minutes
            to a maximum of 24 hours
          </li>
          <br />

          <li className="w-[70%]">
            Upon approval, you will receive a notification and your product will
            be visible to the public
          </li>
        </div>

        <img
          className="w-[25%]  border-[1px] border-gray-800 rounded-lg"
          src="/product-details.jpeg"
          alt="post-product-niuzie"
        />
      </div>

      <div className="bg-gradient-to-r from-dark via-cardColor to-dark px-20 py-10">
        <p className="font-bold">
          b. Listing product when you have exceeded the limit (2)
        </p>
        <br />
        <div className="flex items-center justify-between">
          <li className="w-[70%]">
            When you are at the post product screen and you have already posted
            two products for free as a regular user, you will see a warning at
            the top with that information.
          </li>

          <img
            className="w-[25%] border-[1px] border-gray-800 rounded-lg"
            src="/product-limit.jpeg"
            alt="niuzie-product-limit"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-20 py-10">
        <div>
          <li className="w-[70%]">
            When you list new products, these products will be added to the cart
            which you can see at the top right corner of the screen
          </li>
          <br />
          <li className="w-[70%]">
            After you have added all the products you want, you can click on the
            cart icon that will take you to a page where you can see all the
            products that are pending.
          </li>
          <br />
          <li className="w-[70%]">
            Click on pay now to complete the product listing process
          </li>
        </div>

        <img
          className="w-[25%]  border-[1px] border-gray-800 rounded-lg"
          src="/pending-products.jpeg"
          alt="pending-products-niuzie"
        />
      </div>

      <div className="flex items-center justify-between bg-gradient-to-r from-dark via-cardColor to-dark px-20 py-10">
        <div>
          <li className="w-[70%]">
            A new window will that will enable you to enter your M-PESA phone
            number and complete the payment
          </li>
          <br />
          <li className="w-[70%]">
            You will now wait for approval from the admin and your product will
            be live. This takes a few minutes to a maximum of 24 hours.
          </li>
        </div>

        <img
          className="w-[25%]  border-[1px] border-gray-800 rounded-lg"
          src="/payment.jpeg"
          alt="pay-for-products-niuzie"
        />
      </div>

      <div className=" px-20 py-10">
        <p className="font-bold">c. Listing product as a premium member</p>
        <br />
        <p>
          After you join premium, you will be able to post unlimited number of
          products and the steps will be exactly as described in a above.
        </p>
        <br />
        <p className="font-bold">2. Buying a product</p>
        <br />
        <li>
          When you click on a product you want, you will be navigated to to the
          product details screen where you can access the seller details
        </li>
        <br />
        <li>
          If you have logged in, clicking on either the call or sms icon will
          display the seller details
        </li>
        <br />
        <li>
          If you have not logged in, clicking those icons will prompt you for
          login or signup. This will then enable you to access fully the seller
          contact details.
        </li>
      </div>

      <div className="flex items-center justify-between bg-gradient-to-r from-dark via-cardColor to-dark px-20 py-10">
        <div>
          <p className="font-bold">3. Posting a product request</p> <br />
          <p className="w-[70%]">
            You can also post a product that you are looking for as a buyer.
          </p>
          <br />
          <li className="w-[70%]">
            Click on the plus icon in the bottom tab navigation. This will open
            a screen that will give you two options (Posting a product you are
            selling or posting a product you are looking for)
          </li>
        </div>

        <img
          className="w-[25%]  border-[1px] border-gray-800 rounded-lg"
          src="/post-options.jpeg"
          alt="post-products-niuzie"
        />
      </div>

      <div className="flex items-center justify-between px-20 py-10">
        <div>
          <li className="w-[70%]">
            Go ahead and click “Post product request” button. If you haven't
            created an account, a registration window will show. Finish the
            registration process then come back and continue the process.
          </li>
          <br />
          <li className="w-[70%]">
            If you are already logged in, you will see the below screen that you
            can give a description of the product that you are looking for.
            Sellers will be able to see your contact details and reach out you.
          </li>
        </div>

        <img
          className="w-[25%]  border-[1px] border-gray-800 rounded-lg"
          src="/buyer-request.jpeg"
          alt="niuzie-buyer-request"
        />
      </div>
    </div>
  );
}
