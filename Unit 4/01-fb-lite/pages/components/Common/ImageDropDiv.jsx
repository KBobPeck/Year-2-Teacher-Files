import React from "react";
import { Form, Segment, Image, Icon, Header } from "semantic-ui-react";

function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia,
}) {
  return (
    <>
      <Form.Field>
        <Segment placeholder basic secondary>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="media"
            ref={inputRef}
            onInput={(e) => {
              const droppedFile = Array.from(e.target.files);
              setMedia(droppedFile[0]);
              setMediaPreview(URL.createObjectURL(droppedFile[0]));
            }}
          />

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setHighlighted(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setHighlighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setHighlighted(true);
              //! this lets you see what the data looks like, this is only readable from the browser so we need to make an array from the files
              // console.log(e.dataTransfer.files);

              const droppedFile = Array.from(e.dataTransfer.files);
              setMedia(droppedFile[0]);
              setMediaPreview(URL.createObjectURL(droppedFile[0]));
            }}
            onClick={() => inputRef.current.click()}
            style={{ cursor: "pointer" }}
          >
            {mediaPreview === null ? (
              <>
                <Segment
                  {...(highlighted && { color: "green" })}
                  placeholder
                  basic
                >
                  <Header icon>
                    <Icon name="file image outline" />
                    Drag n Drop or Click To Upload Image
                  </Header>
                </Segment>
              </>
            ) : (
              <>
                <Segment color="green" placeholder basic>
                  <Image
                    src={mediaPreview}
                    size="medium"
                    centered
                    style={{ cursor: "pointer" }}
                    onClick={() => inputRef.current.click()}
                  />
                </Segment>
              </>
            )}
          </div>
        </Segment>
      </Form.Field>
    </>
  );
}

export default ImageDropDiv;
