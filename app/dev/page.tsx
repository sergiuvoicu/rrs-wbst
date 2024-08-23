import Button from "@/components/button/button";

export default () => {
   return (
      <>
         <Button type="primary" size="small">
            <p>Small Button</p>
         </Button>
         <br />
         <br />
         <Button type="primary" size="medium">
            <p>Medium Button</p>
         </Button>
         <br />
         <br />
         <Button type="primary" size="large">
            <p>Large Button</p>
         </Button>
         <br />
         <br />
         <Button type="secondary" size="small">
            <p>Small Button</p>
         </Button>
         <br />
         <br />
         <Button type="secondary" size="medium">
            <p>Medium Button</p>
         </Button>
         <br />
         <br />
         <Button type="secondary" size="large">
            <p>Large Button</p>
         </Button>
      </>
   );
};
